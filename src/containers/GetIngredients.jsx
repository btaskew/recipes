import React, {Component} from 'react';

import Recipe from 'scripts/Recipe';

class GetIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {recipes: null};
    }

    componentDidMount() {
        const recipes = Recipe.findByIngredient(this.props.name);
        if (!recipes) {
            this.setState({error: true});
            return;
        }
        if (recipes.length < 1) {
            this.setState({noResult: true});
            return;
        }
        this.setState({recipes});
    }

    render() {
        return this.props.render(this.state);
    }
}

export default GetIngredients;
