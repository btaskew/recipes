import React, {Component} from 'react';

import Page from 'components/utils/Page';
import InputForm from 'components/utils/InputForm';

class AddRecipe extends Component {
    render() {
        return (
            <Page heading="Add recipe" homeIcon>
                <InputForm
                    handleSubmit={this.handleSubmit}
                    buttonText="Add"
                    inputText="Enter recipe name"
                />
            </Page>
        );
    }
}

export default AddRecipe;
