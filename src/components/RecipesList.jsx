import React from 'react';

import {ListGroup} from 'react-bootstrap';
import OptionLink from 'components/OptionLink';

function RecipesList(props) {
    return (
        <ListGroup className={props.styleName}>
            {props.recipes.map(recipe => (
                <OptionLink
                    key={recipe.$loki}
                    text={recipe.name}
                    link={`/recipe/${recipe.$loki}`}
                />
            ))}
        </ListGroup>
    );
}

//Should account for when no recipes are given

export default RecipesList;
