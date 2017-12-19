import loki from 'lokijs';

class Database {
    constructor() {
        this.database = new loki('recipes.db');
    }

    setup() {
        this.setupRecipes();
        this.setupIngredients();

        console.log(this.getByIngredient('Bacon'));
    }

    getByIngredient(ingredient) {
        const ingredients = this.ingredients.find({ingredient: ingredient});

        if (!ingredients || ingredients.length < 1) {
            return [];
        }

        return this.searchRecipes(ingredients);
    }

    searchRecipes(ingredients) {
        const recipes = [];

        for (const i in ingredients) {
            const item = ingredients[i];
            const recipe = this.recipes.find({id: item.recipeId});
            if (recipe !== null && recipe.length > 0) {
                recipes.push(recipe[0]);
            }
        }

        return recipes;
    }

    setupRecipes() {
        this.recipes = this.database.addCollection('recipes');
        this.recipes.insert([
            {id: 1, recipe: 'Spaghetti carbonara'},
            {id: 2, recipe: 'Stir fry'},
            {id: 3, recipe: 'Bacon & tomato rice'}
        ]);
    }

    setupIngredients() {
        this.ingredients = this.database.addCollection('ingredients');
        this.ingredients.insert([
            {id: 1, recipeId: 1, ingredient: 'Bacon'},
            {id: 1, recipeId: 1, ingredient: 'Cream cheese'},
            {id: 1, recipeId: 1, ingredient: 'Egg'},
            {id: 1, recipeId: 2, ingredient: 'Chicken'},
            {id: 1, recipeId: 2, ingredient: 'Prawns'},
            {id: 1, recipeId: 2, ingredient: 'Tukey'},
            {id: 1, recipeId: 2, ingredient: 'Noodles'},
            {id: 1, recipeId: 3, ingredient: 'Bacon'},
            {id: 1, recipeId: 3, ingredient: 'Tomato'},
            {id: 1, recipeId: 3, ingredient: 'Peppers'},
            {id: 1, recipeId: 7, ingredient: 'foobar'}
        ]);
    }
}

export default new Database();
