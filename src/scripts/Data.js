class Data {
    getRecipes() {
        return [
            {id: 1, name: 'Spaghetti carbonara'},
            {id: 2, name: 'Stir fry'},
            {id: 3, name: 'Bacon & tomato rice'}
        ];
    }

    getIngredients() {
        return [
            {id: 1, recipeId: 1, name: 'Bacon'},
            {id: 1, recipeId: 1, name: 'Cream cheese'},
            {id: 1, recipeId: 1, name: 'Egg'},
            {id: 1, recipeId: 2, name: 'Chicken'},
            {id: 1, recipeId: 2, name: 'Prawns'},
            {id: 1, recipeId: 2, name: 'Tukey'},
            {id: 1, recipeId: 2, name: 'Noodles'},
            {id: 1, recipeId: 3, name: 'Bacon'},
            {id: 1, recipeId: 3, name: 'Tomato'},
            {id: 1, recipeId: 3, name: 'Peppers'},
            {id: 1, recipeId: 7, name: 'foobar'}
        ];
    }
}

export default new Data();
