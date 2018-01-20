import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function Ingredient(props) {
    return (
        <LinkContainer to={`/ingredient/${props.name}`}>
            <Label bsStyle="primary">{props.name}</Label>
        </LinkContainer>
    );
}

Ingredient.propTypes = {
    name: PropTypes.string.isRequired
};

export default Ingredient;
