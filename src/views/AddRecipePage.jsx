import React from 'react';

import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router';
import Page from 'components/utils/Page';
import InputForm from 'components/utils/InputForm';
import AddRecipe from 'containers/AddRecipe';

function AddRecipePage() {
    return (
        <AddRecipe
            render={(state, handleSubmit) => (
                <Page heading="Add recipe">
                    <InputForm
                        submitForm={handleSubmit}
                        buttonText="Add"
                        inputText="Enter recipe name"
                    />
                    {state.success && <Redirect to={state.redirectPath} />}
                    {state.error && (
                        <Alert className="topPadding" bsStyle="danger">
                            {state.errorMessage}
                        </Alert>
                    )}
                </Page>
            )}
        />
    );
}

export default AddRecipePage;
