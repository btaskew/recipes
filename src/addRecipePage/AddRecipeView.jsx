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

            {props.result &&
                (!props.success ? (
                    <Alert bsStyle="danger">Error saving recipe. Please try again later</Alert>
                ) : (
                    <Redirect to={props.redirectPath} />
                ))}
        </Page>
    );
}

AddRecipeView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    result: PropTypes.bool.isRequired,
    redirectPath: PropTypes.string
};
AddRecipeView.defaultProps = {
    redirectPath: '/'
};

export default AddRecipeView;
