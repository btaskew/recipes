import React from 'react';

import Page from 'components/utils/Page';
import InputForm from 'components/utils/InputForm';
import AddRecipe from 'containers/AddRecipe';

function AddRecipePage() {
    return (
        <AddRecipe
            render={(result, handleSubmit) => (
                <Page heading="Add recipe">
                    <InputForm
                        submitForm={handleSubmit}
                        buttonText="Add"
                        inputText="Enter recipe name"
                    />
                    {result}
                </Page>
            )}
        />
    );
}

export default AddRecipePage;
