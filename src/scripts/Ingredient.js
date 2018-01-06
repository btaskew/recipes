import Database from 'scripts/Database';
import Recipe from 'scripts/Recipe';

class Ingredient extends Database {
    findByName(name) {
        return this.ingredients.find({name});
    }

    findByRecipeId(recipeId) {
        return this.ingredients.find({recipeId});
    }

    relatedRecipes(ingredients) {
        const recipes = [];

        for (const i in ingredients) {
            const item = ingredients[i];
            const recipe = Recipe.findById(item.recipeId);
            if (recipe !== null && recipe.length > 0) {
                recipes.push(recipe[0]);
            }
        }

        return recipes;
    }

    addIngredient(ingredient, recipeId) {
        this.ingredients.insert({
            name: ingredient,
            recipeId: recipeId
        });
    }
}

export default new Ingredient();
