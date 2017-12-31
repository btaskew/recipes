import {Component} from 'react';

import Recipe from 'scripts/Recipe';

class GetIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            heading: 'Loading...',
            error: false,
            noResult: false
        };
    }

    componentDidMount() {
        const recipeId = parseInt(this.props.id, 10);
        const recipe = Recipe.findById(recipeId);

        if (!recipe) {
            this.setState({error: true});
            return;
        }
        if (recipe.length < 1) {
            this.setState({noResult: true});
            return;
        }
        const ingredients = Recipe.relatedIngredients(recipeId);
        this.setState({ingredients, heading: recipe[0].name});
    }

    render() {
        return this.props.render(this.state);
    }
}

export default GetIngredients;
