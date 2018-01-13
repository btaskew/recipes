import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';
import Ingredient from 'scripts/Ingredient';

import RecipePageView from 'views/RecipePageView';

class RecipePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: 'Loading...',
            loading: true,
            error: false,
            errorMessage: null,
            recipeFound: false
        };
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.match.params.id, 10);
        const recipe = Recipe.findById(recipeId);

        if (!recipe || recipe.length < 1) {
            this.setState({
                error: true,
                errorMessage: 'Error loading recipe. Please try again later',
                heading: 'Oops!',
                loading: false
            });
            return;
        }

        this.setState({heading: recipe[0].name, recipeFound: true, loading: false});
    }

    addIngredient = ingredient => {
        this.setState({loading: true});
        const recipeId = parseInt(this.props.match.params.id, 10);
        Ingredient.addIngredient(ingredient, recipeId);
        this.setState({loading: false, error: false, errorMessage: null});
    };

    render() {
        return (
            <RecipePageView
                {...this.state}
                recipeId={this.props.match.params.id}
                addIngredient={this.addIngredient}
            />
        );
    }
}

export default RecipePageContainer;
