import React from 'react';

import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';
import GetRecipes from 'containers/GetRecipes';

function RecipePage(props) {
    return (
        <GetRecipes
            id={props.match.params.id}
            render={state => (
                <Page heading={state.heading} homeIcon>
                    {state.message}
                    {state.ingredients && (
                        <IngredientsList ingredients={state.ingredients} />
                    )}
                </Page>
            )}
        />
    );
}

export default RecipePage;
