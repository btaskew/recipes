import React from 'react';

import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';
import InputForm from 'components/utils/InputForm';

function RecipePageView(props) {
    return (
        <Page
            heading={props.heading}
            loading={props.loading}
            error={props.error}
            errorMessage={props.errorMessage}
            noResult={props.noResult}
        >
            {props.ingredients && (
                <React.Fragment>
                    <InputForm
                        submitForm={props.addIngredient}
                        buttonText="Add"
                        inputText="Enter ingredient name"
                    />
                    <IngredientsList ingredients={props.ingredients} />
                </React.Fragment>
            )}
        </Page>
    );
}

export default RecipePageView;
