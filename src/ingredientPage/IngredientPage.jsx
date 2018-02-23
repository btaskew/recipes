import React from 'react';
import PropTypes from 'prop-types';

import RecipeSearch from 'containers/RecipeSearch';
import IngredientPageView from 'ingredientPage/IngredientPageView';

function IngredientPage(props) {
    return (
        <RecipeSearch
            render={(state, recipeSearch) => (
                <IngredientPageView
                    {...state}
                    ingredient={props.match.params.name}
                    getRecipes={recipeSearch}
                />
            )}
        />
    );
}

IngredientPage.propTypes = {
    match: PropTypes.object
};
IngredientPage.defaultProps = {
    match: {
        params: {
            name: ''
        }
    }
};

export default IngredientPage;
