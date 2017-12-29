import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import {Alert} from 'react-bootstrap';

class GetRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            heading: 'Loading...',
            message: null
        };
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.id, 10);
        const recipe = Recipe.findById(recipeId);
        if (!recipe || recipe.length < 1) {
            this.showError();
            return;
        }
        const ingredients = Recipe.relatedIngredients(recipeId);
        this.setState({ingredients, heading: recipe[0].name});
    }

    showError() {
        this.setState({
            message: (
                <Alert bsStyle="danger">
                    Error loading recipe, please try again later
                </Alert>
            ),
            heading: 'Error'
        });
    }

    render() {
        return this.props.render(this.state);
    }
}

export default GetRecipes;
