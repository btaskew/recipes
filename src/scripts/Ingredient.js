import Database from 'scripts/Database';
import Recipe from 'scripts/Recipe';

class Ingredient extends Database {
    async findByName(name) {
        return await this.ingredients.find({name});
    }

    async findByRecipeId(recipeId) {
        return await this.ingredients.find({recipeId});
    }

    async relatedRecipes(ingredients) {
        const recipes = [];

        for (const i in ingredients) {
            const item = ingredients[i];
            const recipe = await Recipe.findById(item.recipeId);
            if (recipe !== null) {
                recipes.push(recipe);
            }
        }

        return recipes;
    }

    async fromRecipe(ingredientName, recipeId) {
        return await this.ingredients.where(ingredient => {
            return ingredient.name === ingredientName && ingredient.recipeId === recipeId;
        });
    }

    async addIngredient(ingredient, recipeId) {
        if(await Recipe.hasIngredient(ingredient, recipeId)) {
            return 'Ingredient present';
        }

        return await this.ingredients.insert({
            name: ingredient,
            recipeId: recipeId
        });
    }
}

export default new Ingredient();
