import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import RecipeSearchView from 'views/RecipeSearchView';

class RecipeSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            noResult: false,
            recipes: null
        };
    }

    handleSubmit = ingredient => {
        this.setState({loading: true});
        const recipes = Recipe.findByIngredient(ingredient);

        if (!recipes || recipes.length < 1) {
            this.setState({noResult: true, loading: false});
            return;
        }

        this.setState({recipes: recipes, loading: false});
    };

    render() {
        return (
            <RecipeSearchView
                {...this.state}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default RecipeSearchContainer;
