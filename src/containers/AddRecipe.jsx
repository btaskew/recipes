import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {result: null};
    }

    handleSubmit = name => {
        if (!name || name === '') {
            this.showError('Please enter a value');
            return;
        }

        const recipe = Recipe.addRecipe(name);

        if (!recipe || recipe.length < 1) {
            this.showError('Error saving recipe. Please try again later');
            return;
        }
        this.setState({
            result: (
                <Redirect to={`/recipe/${recipe[0].$loki}/${recipe[0].name}`} />
            )
        });
    };

    showError = message => {
        this.setState({
            result: (
                <Alert className="topPadding" bsStyle="danger">
                    {message}
                </Alert>
            )
        });
    };

    render() {
        return this.props.render(this.state.result, this.handleSubmit);
    }
}

export default AddRecipe;
