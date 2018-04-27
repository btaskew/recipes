import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';

import AddRecipeView from 'addRecipePage/AddRecipeView';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            success: false,
            redirectPath: null,
            result: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(name) {
        this.setState({loading: true});

        const recipe = await Recipe.addRecipe(name);

        if (!recipe || recipe.length < 1) {
            this.setState({
                success: false,
                result: true,
                loading: false
            });
            return;
        }

        this.setState({
            redirectPath: `/recipe/${recipe.$loki}`,
            success: true,
            result: true,
            loading: false
        });
    }

    render() {
        return <AddRecipeView {...this.state} handleSubmit={this.handleSubmit} />;
    }
}

export default AddRecipe;
