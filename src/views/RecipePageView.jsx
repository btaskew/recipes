import React from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';
import InputForm from 'components/utils/InputForm';

function RecipePageView(props) {
    return (
        <Page heading={props.heading} loading={props.loading}>
            {/* Change ingredients prop to recipeFound */}
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

            {props.error && (
                <Alert bsStyle="danger">{props.errorMessage}</Alert>
            )}
            
        </Page>
    );
}

export default RecipePageView;
