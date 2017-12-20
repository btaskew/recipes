import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

import Page from 'components/utils/Page';
import SearchForm from 'components/SearchForm';
import RecipesList from 'components/RecipesList';

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
            <Page heading="Search by ingredient" homeIcon>
                <SearchForm submitForm={this.handleSubmit} />
                {this.state.recipes && (
                    <RecipesList styleName="searchResults" recipes={this.state.recipes} />
                )}
            </Page>
        );
    }
}

export default SearchPage;
