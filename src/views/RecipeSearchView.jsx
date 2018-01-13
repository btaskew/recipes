import React from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/utils/Page';
import InputForm from 'components/utils/InputForm';
import RecipesList from 'components/RecipesList';

function RecipeSearchView(props) {
    return (
        <Page heading="Search by ingredient" loading={props.loading}>
            <InputForm
                submitForm={props.handleSubmit}
                buttonText="Search"
                inputText="Enter ingredient"
            />

            {props.noResult && (
                <Alert bsStyle="info">
                    No recipes found for that ingredient
                </Alert>
            )}

            {props.error && (
                <Alert bsStyle="danger">{props.errorMessage}</Alert>
            )}

            {props.recipes && (
                <RecipesList styleName="topPadding" recipes={props.recipes} />
            )}
        </Page>
    );
}

export default RecipeSearchView;
