import React from 'react';

import Page from 'components/utils/Page';
import RecipesList from 'components/RecipesList';

function IngredientPageView(props) {
    return (
        <Page
            heading={`Recipes using "${props.ingredient}"`}
            error={props.error}
            noResult={props.noResult}
        >
            {props.recipes && <RecipesList recipes={props.recipes} />}
        </Page>
    );
}

export default IngredientPageView;
