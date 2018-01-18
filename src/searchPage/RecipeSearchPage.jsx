import React from 'react';
import RecipeSearch from 'containers/RecipeSearch';
import RecipeSearchView from 'searchPage/RecipeSearchView';

function RecipeSearchPage() {
    return (
        <RecipeSearch
            render={(state, recipeSearch) => (
                <RecipeSearchView {...state} handleSubmit={recipeSearch} />
            )}
        />
    );
}

export default RecipeSearchPage;
