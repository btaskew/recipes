import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';

import AddRecipeView from 'views/AddRecipeView';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: null,
            success: false,
            redirectPath: null
        };
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
            redirectPath: `/recipe/${recipe[0].$loki}/${recipe[0].name}`,
            success: true
        });
    };

    showError = message => {
        this.setState({
            error: true,
            errorMessage: message
        });
    };

    render() {
        return (
            <AddRecipeView {...this.state} handleSubmit={this.handleSubmit} />
        );
    }
}

export default AddRecipe;
