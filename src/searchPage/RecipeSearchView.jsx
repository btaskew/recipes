import React from 'react';

import {Alert} from 'react-bootstrap';
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

            {props.noResult && (
                <Alert bsStyle="info" className="marginTop">
                    No recipes found for that ingredient
                </Alert>
            )}

            {props.recipes && <RecipesList styleName="marginTop" recipes={props.recipes} />}
        </Page>
    );
}

export default RecipeSearchView;
