import React from 'react';

import Page from 'components/utils/Page';
import RecipesList from 'components/RecipesList';
import GetRecipes from 'containers/GetRecipes';

function IngredientPage(props) {
    return (
        <GetRecipes
            name={props.match.params.name}
            render={state => (
                <Page
                    heading={`Recipes using "${props.match.params.name}"`}
                    error={state.error}
                    noResult={state.noResult}
                >
                    {state.recipes && (
                        <RecipesList recipes={state.recipes} />
                    )}
                </Page>
            )}
        />
    );
}

export default IngredientPage;
