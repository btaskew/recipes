import React, {PureComponent} from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/utils/Page';
import RecipesList from 'components/RecipesList';

class IngredientPageView extends PureComponent {
    componentDidMount() {
        this.props.getRecipes(this.props.ingredient);
    }

    render() {
        return (
            <Page
                heading={`Recipes using "${this.props.ingredient}"`}
                loading={this.props.loading}
            >
                {this.props.noResult && (
                    <Alert bsStyle="info">
                        No recipes found for that ingredient
                    </Alert>
                )}

                {this.props.recipes && (
                    <RecipesList recipes={this.props.recipes} />
                )}
            </Page>
        );
    }
}

export default IngredientPageView;
