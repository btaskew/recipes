import React from 'react';

import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router';
import Page from 'components/utils/Page';
import InputForm from 'components/utils/InputForm';

function AddRecipeView(props) {
    return (
        <Page heading="Add recipe">
            <InputForm
                submitForm={props.handleSubmit}
                buttonText="Add"
                inputText="Enter recipe name"
            />

            {props.success && <Redirect to={props.redirectPath} />}

            {props.error && (
                <Alert className="topPadding" bsStyle="danger">
                    {props.errorMessage}
                </Alert>
            )}
        </Page>
    );
}

export default AddRecipeView;
