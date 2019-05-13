import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Ingredient from 'scripts/Ingredient';

import RecipePageView from 'recipePage/RecipePageView';
import Connection from '../scripts/Connection';

class RecipePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: 'Loading...',
            loading: true,
            error: false,
            errorMessage: null,
            ingredients: null
        };

        this.addIngredient = this.addIngredient.bind(this);
    }

    async componentDidMount() {
        const recipeId = parseInt(this.props.match.params.id, 10);
        const recipe = await Connection.get('recipes/' + recipeId);

        if (!recipe || recipe.length < 1) {
            this.setState({
                error: true,
                errorMessage: 'Error loading recipe. Please try again later',
                heading: 'Oops!',
                loading: false
            });
            return;
        }

        this.setState({heading: recipe.name, ingredients: recipe.ingredients, loading: false});
    }

    async addIngredient(ingredient) {
        this.setState({loading: true});
        const recipeId = parseInt(this.props.match.params.id, 10);
        const recipeIngredient = await Connection.post('recipes/' + recipeId + '/ingredients', {name: ingredient});

        if (!recipeIngredient) {
            this.setState({
                error: true,
                errorMessage: 'Error adding ingredient. Please try again later',
                loading: false
            });
            return;
        }

        if (recipeIngredient === 'Ingredient present') {
            this.setState({
                error: true,
                errorMessage: 'Ingredient already in the recipe! Please add a new ingredient',
                loading: false
            });
            return;
        }

        this.setState(prevState => ({
            loading: false,
            error: false,
            errorMessage: null,
            ingredients: prevState.ingredients.concat(recipeIngredient)
        }));
    }

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <RecipePageView
                {...this.state}
                recipeId={this.props.match.params.id}
                addIngredient={this.addIngredient}
            />
        );
    }
}

RecipePageContainer.propTypes = {
    match: PropTypes.object
};
RecipePageContainer.defaultProps = {
    match: {
        params: {
            id: null
        }
    }
};

export default RecipePageContainer;
