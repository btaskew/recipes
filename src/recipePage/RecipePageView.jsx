import React from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/Page';
import InputForm from 'components/InputForm';
import IngredientsList from 'recipePage/IngredientsList';

function RecipePageView(props) {
    return (
        <Page heading={props.heading} loading={props.loading}>
            {props.ingredients && (
                <React.Fragment>
                    <InputForm
                        submitForm={props.addIngredient}
                        buttonText="Add"
                        inputText="Enter ingredient name"
                    />
                    <hr />
                    <IngredientsList ingredients={props.ingredients} />
                </React.Fragment>
            )}

            {props.error && <Alert bsStyle="danger">{props.errorMessage}</Alert>}
        </Page>
    );
}

export default RecipePageView;
