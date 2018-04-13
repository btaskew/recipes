import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Page from 'components/Page';
import RecipesList from 'components/RecipesList';

class IngredientPageView extends PureComponent {
    async componentDidMount() {
        await this.props.getRecipes(this.props.ingredient);
    }

    render() {
        return (
            <Page heading={`Recipes using "${this.props.ingredient}"`} loading={this.props.loading}>
                {!this.props.loading && (
                    <RecipesList recipes={this.props.recipes} />
                )}
            </Page>
        );
    }
}

IngredientPageView.propTypes = {
    ingredient: PropTypes.string.isRequired,
    getRecipes: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    recipes: PropTypes.array
};
IngredientPageView.defaultProps = {
    recipes: []
};

export default IngredientPageView;
