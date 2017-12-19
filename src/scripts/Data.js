class Data {
    getRecipes() {
        return [
            {id: 1, recipe: 'Spaghetti carbonara'},
            {id: 2, recipe: 'Stir fry'},
            {id: 3, recipe: 'Bacon & tomato rice'}
        ];
    }

    getIngredients() {
        return [
            {id: 1, recipeId: 1, ingredient: 'Bacon'},
            {id: 1, recipeId: 1, ingredient: 'Cream cheese'},
            {id: 1, recipeId: 1, ingredient: 'Egg'},
            {id: 1, recipeId: 2, ingredient: 'Chicken'},
            {id: 1, recipeId: 2, ingredient: 'Prawns'},
            {id: 1, recipeId: 2, ingredient: 'Tukey'},
            {id: 1, recipeId: 2, ingredient: 'Noodles'},
            {id: 1, recipeId: 3, ingredient: 'Bacon'},
            {id: 1, recipeId: 3, ingredient: 'Tomato'},
            {id: 1, recipeId: 3, ingredient: 'Peppers'},
            {id: 1, recipeId: 7, ingredient: 'foobar'}
        ];
    }
}

export default new Data();
