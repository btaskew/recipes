import Database from 'scripts/Database';

class Query extends Database {
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
}

export default new Query();
