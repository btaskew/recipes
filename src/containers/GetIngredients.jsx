import {Component} from 'react';

import Recipe from 'scripts/Recipe';
import Ingredient from 'scripts/Ingredient';

class GetIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            heading: 'Loading...',
            error: false,
            noResult: false
        };
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.id, 10);
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
        this.setState({ingredients, heading: recipe[0].name});
    }

    handleSubmit = ingredient => {
        if (!ingredient || ingredient === '') {
            this.showError('Please enter a value');
            return;
        }

        const recipeId = parseInt(this.props.id, 10);
        Ingredient.addIngredient(ingredient, recipeId);
    };

    showError = message => {
        this.setState({
            error: true,
            errorMessage: message
        });
    };

    render() {
        return this.props.render(this.state, this.handleSubmit);
    }
}

export default GetIngredients;
