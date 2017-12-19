import React, {Component} from 'react';

import Page from 'components/Page';
import SearchForm from 'components/SearchForm';

class SearchPage extends Component {

    handleSubmit(ingredient) {
        
    }

    render() {
        return (
            <Page heading="Search by ingredient">
                <SearchForm submitForm={this.handleSubmit} />
            </Page>
        );
    }
}

export default SearchPage;
