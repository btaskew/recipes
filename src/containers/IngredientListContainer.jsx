import React, {PureComponent} from 'react';
import Recipe from 'scripts/Recipe';

import IngredientsList from 'components/IngredientsList';

class IngredientListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {ingredients: null};
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.recipeId, 10);
        const ingredients = Recipe.relatedIngredients(recipeId);
        this.setState({ingredients: ingredients});
    }

    render() {
        return <IngredientsList ingredients={this.state.ingredients} />;
    }
}

export default IngredientListContainer;
