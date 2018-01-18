import React from 'react';

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

export default IngredientsList;