import Database from 'scripts/Database';
import Recipe from 'scripts/Recipe';

class Ingredient extends Database {
    findByName(name) {
        return this.ingredients.find({name});
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
}

export default new Ingredient();
