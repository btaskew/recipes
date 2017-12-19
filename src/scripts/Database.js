import loki from 'lokijs';
import Data from 'scripts/Data';

class Database {
    constructor() {
        this.database = new loki('recipes.db');
    }

    setup() {
        this.setRecipes();
        this.setIngredients();

        console.log(this.findByIngredient('Bacon'));
    }

    findByIngredient(ingredient) {
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

    setRecipes() {
        this.recipes = this.database.addCollection('recipes');
        this.recipes.insert(Data.getRecipes());
    }

    setIngredients() {
        this.ingredients = this.database.addCollection('ingredients');
        this.ingredients.insert(Data.getIngredients());
    }
}

export default new Database();
