import React from 'react';

import Page from 'components/utils/Page';
import RecipesList from 'components/RecipesList';
import GetIngredients from 'containers/GetIngredients';

function IngredientPage(props) {
    return (
        <GetIngredients
            name={props.match.params.name}
            render={state => (
                <Page
                    heading={`Recipes using "${props.match.params.name}"`}
                    homeIcon>
                    {state.recipes && (
                        <RecipesList recipes={state.recipes} />
                    )}
                </Page>
            )}
        />
    );
}

export default IngredientPage;
