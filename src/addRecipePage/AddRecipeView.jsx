import React from 'react';
import PropTypes from 'prop-types';

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

            {props.error && <Alert bsStyle="danger">{props.errorMessage}</Alert>}

            {props.success && <Redirect to={props.redirectPath} />}
        </Page>
    );
}

AddRecipeView.propTypes = {
    error: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    redirectPath: PropTypes.string
};
AddRecipeView.defaultProps = {
    errorMessage: 'Error adding recipe',
    redirectPath: '/'
};

export default AddRecipeView;
