import {Component} from 'react';

import Recipe from 'scripts/Recipe';

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            noResult: false,
            recipes: null
        };
    }

    recipeSearch = ingredient => {
        this.setState({loading: true});
        const recipes = Recipe.findByIngredient(ingredient);

        if (!recipes || recipes.length < 1) {
            this.setState({noResult: true, loading: false});
            return;
        }

        this.setState({recipes: recipes, loading: false});
    };

    render() {
        return this.props.render(this.state, this.recipeSearch);
    }
}

export default RecipeSearch;
