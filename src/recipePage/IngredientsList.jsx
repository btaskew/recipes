import React from 'react';
import PropTypes from 'prop-types';

import {Alert} from 'react-bootstrap';
import Ingredient from 'recipePage/Ingredient';

function IngredientsList(props) {
    if (!props.ingredients) {
        return null;
    }

    if (props.ingredients.length < 1) {
        return <Alert bsStyle="info">No ingredients found</Alert>;
    }

    return (
        <React.Fragment>
            <p>Ingredients:</p>
            <div className="flex">
                {props.ingredients.map(ingredient => (
                    <Ingredient
                        key={ingredient.$loki}
                        id={ingredient.$loki}
                        name={ingredient.name}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

IngredientsList.propTypes = {
    ingredients: PropTypes.array
};
IngredientsList.defaultProps = {
    ingredients: []
};

export default IngredientsList;
