import Database from 'scripts/Database';
import Ingredient from 'scripts/Ingredient';

class Recipe extends Database {
    findById(id) {
        return this.recipes.find({$loki: id});
    }

    findByName(name) {
        return this.recipes.find({name});
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

    addRecipe(recipe) {
        this.recipes.insert({
            name: recipe
        });
        return this.findByName(recipe);
    }
}

export default new Recipe();
