import React from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/utils/Page';
import RecipesList from 'components/RecipesList';

function IngredientPageView(props) {
    return (
        <Page heading={`Recipes using "${props.ingredient}"`} loading={props.loading}>

            {props.error && (
                <Alert bsStyle="danger">{props.errorMessage}</Alert>
            )}

            {props.noResult && (
                <Alert bsStyle="info">
                    No recipes found for that ingredient
                </Alert>
            )}

            {props.recipes && <RecipesList recipes={props.recipes} />}

        </Page>
    );
}

export default IngredientPageView;
