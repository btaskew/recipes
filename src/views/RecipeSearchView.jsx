import React from 'react';

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

            {props.recipes && (
                <RecipesList styleName="topPadding" recipes={props.recipes} />
            )}
        </Page>
    );
}

export default RecipeSearchView;
