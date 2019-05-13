import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/lib/Alert';
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
            <div className="flex flex-wrap margin-bottom">
                {props.ingredients.map(ingredient => (
                    <Ingredient
                        key={ingredient.id}
                        id={ingredient.id}
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
