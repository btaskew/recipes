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
            {id: 2, recipeId: 1, name: 'Cream cheese'},
            {id: 3, recipeId: 1, name: 'Egg'},
            {id: 4, recipeId: 2, name: 'Chicken'},
            {id: 5, recipeId: 2, name: 'Prawns'},
            {id: 6, recipeId: 2, name: 'Tukey'},
            {id: 7, recipeId: 2, name: 'Noodles'},
            {id: 8, recipeId: 3, name: 'Bacon'},
            {id: 9, recipeId: 3, name: 'Tomato'},
            {id: 10, recipeId: 3, name: 'Peppers'},
            {id: 11, recipeId: 7, name: 'foobar'}
        ];
    }
}

export default new Data();
