import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/lib/Alert';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import OptionLink from 'components/OptionLink';

function RecipesList(props) {
    if (!props.recipes || props.recipes.length === 0) {
        return (
            <Alert bsStyle="info" className="margin-top">
                No recipes found for that ingredient
            </Alert>
        );
    }

    return (
        <ListGroup className={props.styleName}>
            {props.recipes.map(recipe => (
                <OptionLink
                    key={recipe.id}
                    text={recipe.name}
                    link={`/recipe/${recipe.id}`}
                />
            ))}
        </ListGroup>
    );
}

RecipesList.propTypes = {
    recipes: PropTypes.array,
    styleName: PropTypes.string
};
RecipesList.defaultProps = {
    styleName: ''
};

export default RecipesList;
