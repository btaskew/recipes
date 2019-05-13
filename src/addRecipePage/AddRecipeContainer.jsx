import React, {Component} from 'react';

import AddRecipeView from 'addRecipePage/AddRecipeView';
import Connection from '../scripts/Connection';

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

        const recipe = await Connection.post('recipes', {name: name});

        if (!recipe || recipe.length < 1) {
            this.setState({
                success: false,
                result: true,
                loading: false
            });
            return;
        }

        this.setState({
            redirectPath: `/recipe/${recipe.id}`,
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
