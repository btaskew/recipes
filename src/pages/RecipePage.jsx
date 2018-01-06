import React from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/utils/Page';
import IngredientsList from 'components/IngredientsList';
import InputForm from 'components/utils/InputForm';
import GetIngredients from 'containers/GetIngredients';

function RecipePage(props) {
    return (
        <GetIngredients
            id={props.match.params.id}
            render={(state, handleSubmit) => (
                <Page
                    heading={state.heading}
                >
                    <InputForm
                        submitForm={handleSubmit}
                        buttonText="Add"
                        inputText="Enter ingredient name"
                    />
                    {state.error && (
                        <Alert className="topPadding" bsStyle="danger">
                            {state.errorMessage}
                        </Alert>
                    )}

                    {state.ingredients && (
                        <IngredientsList ingredients={state.ingredients} />
                    )}

                </Page>
            )}
        />
    );
}

export default RecipePage;
