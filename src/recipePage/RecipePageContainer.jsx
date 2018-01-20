import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from 'scripts/Recipe';
import Ingredient from 'scripts/Ingredient';

import RecipePageView from 'recipePage/RecipePageView';

class RecipePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: 'Loading...',
            loading: true,
            error: false,
            errorMessage: null,
            ingredients: null
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

        this.setState({heading: recipe.name, ingredients: recipe.ingredients, loading: false});
    }

    addIngredient = ingredient => {
        this.setState({loading: true});
        const recipeId = parseInt(this.props.match.params.id, 10);
        Ingredient.addIngredient(ingredient, recipeId);
        this.setState({loading: false, error: false, errorMessage: null});
    };

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            return false;
        }
        return true;
    }

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

RecipePageContainer.propTypes = {
    match: PropTypes.object
};
RecipePageContainer.defaultProps = {
    match: {
        params: {
            id: null
        }
    }
};

export default RecipePageContainer;
