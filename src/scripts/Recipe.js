import Database from 'scripts/Database';
import Ingredient from 'scripts/Ingredient';

class Recipe extends Database {
    findById(id) {
        const recipe = this.recipes.find({$loki: id})[0];
        if(!recipe) {
            return null;
        }
        recipe.ingredients = this.relatedIngredients(recipe.$loki);
        return recipe;
    }

    findByName(name) {
        const recipe =  this.recipes.find({name})[0];
        if(!recipe) {
            return null;
        }
        recipe.ingredients = this.relatedIngredients(recipe.$loki);
        return recipe;
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
