import loki from 'lokijs';

class Database {
    setup() {
        this.database = new loki('recipes.db');
        this.setupRecipes();
        this.setupIngredients();
        console.log(this.database);
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
            {id: 1, recipeId: 3, ingredient: 'Peppers'}
        ]);
    }
}

export default new Database();
