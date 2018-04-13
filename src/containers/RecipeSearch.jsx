import {Component} from 'react';
import PropTypes from 'prop-types';

import Recipe from 'scripts/Recipe';

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            recipes: null
        };

        this.recipeSearch = this.recipeSearch.bind(this);
    }

    async recipeSearch(ingredient) {
        this.setState({loading: true});

        const recipes = await Recipe.findByIngredient(ingredient);

        this.setState({recipes: recipes, loading: false});
    }

    render() {
        return this.props.render(this.state, this.recipeSearch);
    }
}

RecipeSearch.propTypes = {
    render: PropTypes.func.isRequired
};

export default RecipeSearch;
