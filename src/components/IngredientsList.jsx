import React from 'react';

import {Alert} from 'react-bootstrap';
import Ingredient from 'components/Ingredient';

function IngredientsList(props) {
    if(props.ingredients.length < 1) {
        return <Alert bsStyle="info">No ingredients found</Alert>;
    }

    return (
        <div className="flex">
            {props.ingredients.map(ingredient => (
                <Ingredient
                    key={ingredient.$loki}
                    id={ingredient.$loki}
                    name={ingredient.name}
                />
            ))}
        </div>
    );
}

export default IngredientsList;
