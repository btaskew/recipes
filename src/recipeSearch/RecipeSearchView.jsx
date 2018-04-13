import React from 'react';
import PropTypes from 'prop-types';

import Page from 'components/Page';
import InputForm from 'components/InputForm';
import RecipesList from 'components/RecipesList';

function RecipeSearchView(props) {
    return (
        <Page heading="Search by ingredient" loading={props.loading}>
            <InputForm
                submitForm={props.handleSubmit}
                buttonText="Search"
                inputText="Enter ingredient"
            />

            {!props.loading && <RecipesList styleName="margin-top" recipes={props.recipes} />}
        </Page>
    );
}

RecipeSearchView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    recipes: PropTypes.array
};
RecipeSearchView.defaultProps = {
    recipes: []
};

export default RecipeSearchView;
