import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import Page from 'components/utils/Page';
import SearchForm from 'components/SearchForm';
import SearchResults from 'components/SearchResults';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {recipes: null};
    }

    handleSubmit = ingredient => {
        const recipes = Recipe.findByIngredient(ingredient);
        this.setState({recipes});
    };

    render() {
        return (
            <Page heading="Search by ingredient">
                <SearchForm submitForm={this.handleSubmit} />
                {this.state.recipes && (
                    <SearchResults recipes={this.state.recipes} />
                )}
            </Page>
        );
    }
}

export default SearchPage;
