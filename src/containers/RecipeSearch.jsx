import {Component} from 'react';
import PropTypes from 'prop-types';

import Recipe from 'scripts/Recipe';

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            noResult: false,
            recipes: null
        };

        this.recipeSearch = this.recipeSearch.bind(this);
    }

    async recipeSearch(ingredient) {
        this.setState({loading: true});
        const recipes = await Recipe.findByIngredient(ingredient);

        if (!recipes || recipes.length < 1) {
            this.setState({recipes: null, noResult: true, loading: false});
            return;
        }

        this.setState({recipes: recipes, noResult: false, loading: false});
    }

    render() {
        return this.props.render(this.state, this.recipeSearch);
    }
}

RecipeSearch.propTypes = {
    render: PropTypes.func.isRequired
};

export default RecipeSearch;
