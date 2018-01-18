import React from 'react';

import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router';
import Page from 'components/Page';
import InputForm from 'components/InputForm';

function AddRecipeView(props) {
    return (
        <Page heading="Add recipe" loading={props.loading}>
            <InputForm
                submitForm={props.handleSubmit}
                buttonText="Add"
                inputText="Enter recipe name"
            />

            {props.error && (
                <Alert bsStyle="danger">{props.errorMessage}</Alert>
            )}

            {props.success && <Redirect to={props.redirectPath} />}
        </Page>
    );
}

export default AddRecipeView;
