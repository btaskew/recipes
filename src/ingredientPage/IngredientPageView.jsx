import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Alert} from 'react-bootstrap';
import Page from 'components/Page';
import RecipesList from 'components/RecipesList';

class IngredientPageView extends PureComponent {
    async componentDidMount() {
        await this.props.getRecipes(this.props.ingredient);
    }

    render() {
        return (
            <Page heading={`Recipes using "${this.props.ingredient}"`} loading={this.props.loading}>
                {this.props.noResult && (
                    <Alert bsStyle="info">No recipes found for that ingredient</Alert>
                )}

                {this.props.recipes && <RecipesList recipes={this.props.recipes} />}
            </Page>
        );
    }
}

IngredientPageView.propTypes = {
    ingredient: PropTypes.string.isRequired,
    getRecipes: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    noResult: PropTypes.bool,
    recipes: PropTypes.array
};
IngredientPageView.defaultProps = {
    noResult: false,
    recipes: []
};

export default IngredientPageView;
