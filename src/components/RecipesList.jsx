import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import OptionLink from 'components/utils/OptionLink';

function RecipesList(props) {

    if(props.recipes.length < 1) {
        return (
            <ListGroup className={props.styleName}>
                <ListGroupItem bsStyle="danger">No recipes found</ListGroupItem>
            </ListGroup>
        );
    }

    return (
        <ListGroup className={props.styleName}>
            {props.recipes.map(recipe => (
                <OptionLink
                    key={recipe.id}
                    text={recipe.name}
                    link={`/recipe/${recipe.id}/${recipe.name}`}
                />
            ))}
        </ListGroup>
    );
}

export default RecipesList;
