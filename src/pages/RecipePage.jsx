import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import Page from 'components/utils/Page';

class RecipePage extends Component {
    componentDidMount() {
        const ingredients = Recipe.relatedIngredients(this.props.match.params.id);
    }

    render() {
        return <Page heading={this.props.match.params.name} />;
    }
}

export default RecipePage;
