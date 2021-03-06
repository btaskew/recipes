import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/lib/Alert';
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

RecipePageView.propTypes = {
    heading: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    addIngredient: PropTypes.func,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    ingredients: PropTypes.array
};
RecipePageView.defaultProps = {
    errorMessage: 'Error loading recipes',
};

export default RecipePageView;
