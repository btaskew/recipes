import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import Page from 'components/utils/Page';
import RecipesList from 'components/RecipesList';

class IngredientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {recipes: null};
    }

    componentDidMount() {
        const recipes = Recipe.findByIngredient(this.props.match.params.name);
        this.setState({recipes});
    }

    render() {
        return (
            <Page
                heading={`Recipes using "${this.props.match.params.name}"`}
                homeIcon
            >
                {this.state.recipes && (
                    <RecipesList recipes={this.state.recipes} />
                )}
            </Page>
        );
    }
}

export default IngredientPage;
