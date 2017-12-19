import loki from 'lokijs';
import Data from 'scripts/Data';

class Database {
    constructor() {
        this.database = new loki('recipes.db');
        this.setRecipes();
        this.setIngredients();
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

export default Database;
