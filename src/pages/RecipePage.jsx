import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import {Alert} from 'react-bootstrap';
import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';

class RecipePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            heading: 'Loading...',
            message: null
        };
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.match.params.id, 10);
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
            heading: "Error"
        });
    }

    render() {
        return (
            <Page heading={this.state.heading} homeIcon>
                {this.state.message}
                {this.state.ingredients && (
                    <IngredientsList ingredients={this.state.ingredients} />
                )}
            </Page>
        );
    }
}

export default RecipePage;
