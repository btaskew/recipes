import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';

import AddRecipeView from 'views/AddRecipeView';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: null,
            loading: false,
            success: false,
            redirectPath: null
        };
    }

    handleSubmit = name => {
        this.setState({loading: true});

        const recipe = Recipe.addRecipe(name);

        if (!recipe || recipe.length < 1) {
            this.setState({
                error: true,
                errorMessage: 'Error saving recipe. Please try again later',
                loading: false
            });
            return;
        }

        this.setState({
            redirectPath: `/recipe/${recipe[0].$loki}/${recipe[0].name}`,
            success: true,
            loading: false
        });
    };

    render() {
        return (
            <AddRecipeView {...this.state} handleSubmit={this.handleSubmit} />
        );
    }
}

export default AddRecipe;
