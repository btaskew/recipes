import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router';
import Page from 'components/utils/Page';
import InputForm from 'components/utils/InputForm';

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
    }

    showError = message => {
        this.setState({
            result: <Alert bsStyle="danger">{message}</Alert>
        });
    }

    render() {
        return (
            <Page heading="Add recipe" homeIcon>
                <InputForm
                    submitForm={this.handleSubmit}
                    buttonText="Add"
                    inputText="Enter recipe name"
                />
                {this.state.result}
            </Page>
        );
    }
}

export default AddRecipe;
