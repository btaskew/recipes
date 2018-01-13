import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';

import IngredientPageView from 'views/IngredientPageView';

class IngredientPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            loading: true,
            error: false,
            errorMessage: null,
            noResult: false
        };
    }

    componentDidMount() {
        const recipes = Recipe.findByIngredient(this.props.match.params.name);
        if (!recipes) {
            this.setState({
                error: true,
                errorMessage: 'Error loading recipes. Please try again later',
                loading: false
            });
            return;
        }
        if (recipes.length < 1) {
            this.setState({noResult: true, loading: false});
            return;
        }
        this.setState({recipes, loading: false});
    }

    render() {
        return (
            <IngredientPageView
                {...this.state}
                ingredient={this.props.match.params.name}
            />
        );
    }
}

export default IngredientPageContainer;
