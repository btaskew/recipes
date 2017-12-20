import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';

class RecipePage extends Component {
    constructor(props) {
        super(props);
        this.state = {ingredients: null};
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.match.params.id, 10);
        const ingredients = Recipe.relatedIngredients(recipeId);
        this.setState({ingredients});
    }

    render() {
        return (
            <Page heading={this.props.match.params.name}>
                {this.state.ingredients && (
                    <IngredientsList ingredients={this.state.ingredients} />
                )}
            </Page>
        );
    }
}

export default RecipePage;
