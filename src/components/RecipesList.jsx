import React from 'react';
import PropTypes from 'prop-types';

import {Alert, ListGroup} from 'react-bootstrap';
import OptionLink from 'components/OptionLink';

function RecipesList(props) {
    if(!props.recipes.length || props.recipes.length === 0) {
        return <Alert bsStyle="info">No recipes provided</Alert>;
    }

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

RecipesList.propTypes = {
    recipes: PropTypes.array.isRequired,
    styleName: PropTypes.string
};
RecipesList.defaultProps = {
    styleName: ''
};

export default RecipesList;
