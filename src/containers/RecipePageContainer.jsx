import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';
import Ingredient from 'scripts/Ingredient';

import RecipePageView from 'views/RecipePageView';

class GetIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            heading: null,
            loading: true,
            error: false,
            errorMessage: null,
            noResult: false
        };
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.match.params.id, 10);
        const recipe = Recipe.findById(recipeId);

        if (!recipe) {
            this.showError('Error loading recipe. Please try again later');
            return;
        }
        if (recipe.length < 1) {
            this.setState({noResult: true});
            return;
        }
        const ingredients = Recipe.relatedIngredients(recipeId);
        this.setState({ingredients: ingredients, heading: recipe[0].name, loading: false});
    }

    addIngredient = ingredient => {
        this.setState({loading: true});

        if (!ingredient || ingredient === '') {
            this.showError('Please enter a value');
            return;
        }

        const recipeId = parseInt(this.props.match.params.id, 10);
        Ingredient.addIngredient(ingredient, recipeId);
        this.setState({loading: false});
    };

    showError = message => {
        this.setState({
            error: true,
            errorMessage: message
        });
    };

    render() {
        return (
            <RecipePageView {...this.state} addIngredient={this.addIngredient} />
        );
    }
}

export default GetIngredients;
