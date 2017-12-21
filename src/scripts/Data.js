class Data {
    getRecipes() {
        return [
            {name: 'Spaghetti carbonara'},
            {name: 'Stir fry'},
            {name: 'Bacon & tomato rice'}
        ];
    }

    getIngredients() {
        return [
            {recipeId: 1, name: 'Bacon'},
            {recipeId: 1, name: 'Cream cheese'},
            {recipeId: 1, name: 'Egg'},
            {recipeId: 2, name: 'Chicken'},
            {recipeId: 2, name: 'Prawns'},
            {recipeId: 2, name: 'Tukey'},
            {recipeId: 2, name: 'Noodles'},
            {recipeId: 3, name: 'Bacon'},
            {recipeId: 3, name: 'Tomato'},
            {recipeId: 3, name: 'Peppers'},
            {recipeId: 7, name: 'foobar'}
        ];
    }
}

export default new Data();
