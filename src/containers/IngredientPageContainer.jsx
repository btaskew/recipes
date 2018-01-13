import React, {Component} from 'react';
import Recipe from 'scripts/Recipe';

import IngredientPageView from 'views/IngredientPageView';

class IngredientPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            loading: false,
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
                errorMessage: 'Error loading recipes. Please try again later'
            });
            return;
        }
        if (recipes.length < 1) {
            this.setState({noResult: true});
            return;
        }
        this.setState({recipes});
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
