import Database from 'scripts/Database';
import Ingredient from 'scripts/Ingredient';

class Recipe extends Database {
    findById(id) {
        return this.recipes.find({id});
    }

    findByIngredient(ingredient) {
        const ingredients = Ingredient.findByName(ingredient);

        if (!ingredients || ingredients.length < 1) {
            return [];
        }

        return Ingredient.relatedRecipes(ingredients);
    }

    relatedIngredients(id) {
        return Ingredient.findByRecipeId(id);
    }
}

export default new Recipe();
