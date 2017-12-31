import React from 'react';

import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';
import GetIngredients from 'containers/GetIngredients';

function RecipePage(props) {
    return (
        <GetIngredients
            id={props.match.params.id}
            render={state => (
                <Page
                    heading={state.heading}
                    error={state.error}
                    noResult={state.noResult}
                >
                    {state.ingredients && (
                        <IngredientsList ingredients={state.ingredients} />
                    )}
                </Page>
            )}
        />
    );
}

export default RecipePage;
