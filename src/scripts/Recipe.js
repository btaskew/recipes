import Database from 'scripts/Database';
import Ingredient from 'scripts/Ingredient';

class Recipe extends Database {
    async findById(id) {
        const recipe = await this.recipes.find({$loki: id})[0];

        if (!recipe) {
            return null;
        }

        recipe.ingredients = await this.relatedIngredients(recipe.$loki);
        return recipe;
    }

    async findByName(name) {
        const recipe = await this.recipes.find({name})[0];

        if (!recipe) {
            return null;
        }

        recipe.ingredients = await this.relatedIngredients(recipe.$loki);
        return recipe;
    }

    async findByIngredient(ingredient) {
        const ingredients = await Ingredient.findByName(ingredient);

        if (!ingredients || ingredients.length < 1) {
            return [];
        }

        return await Ingredient.relatedRecipes(ingredients);
    }

    async relatedIngredients(id) {
        return await Ingredient.findByRecipeId(id);
    }

    async hasIngredient(ingredientName, recipeId) {
        const matchedIngredient = await Ingredient.fromRecipe(ingredientName, recipeId);

        if (!matchedIngredient.length) {
            return false;
        }

        return true;
    }

    async addRecipe(recipe) {
        await this.recipes.insert({
            name: recipe
        });
        
        return await this.findByName(recipe);
    }
}

export default new Recipe();
