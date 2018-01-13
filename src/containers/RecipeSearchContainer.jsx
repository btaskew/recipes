import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import RecipeSearchView from 'views/RecipeSearchView';

class RecipeSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            recipes: null
        };
    }

    handleSubmit = ingredient => {
        this.setState({loading: true});
        const recipes = Recipe.findByIngredient(ingredient);
        this.setState({recipes: recipes, loading: false});
    };

    render() {
        return (
            <RecipeSearchView
                loading={this.state.loading}
                recipes={this.state.recipes}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default RecipeSearchContainer;
