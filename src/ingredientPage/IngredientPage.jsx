import React from 'react';
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

export default IngredientPage;
