import React from 'react';

import {Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function Ingredient(props) {
    return (
        <LinkContainer to={`/ingredient/${props.name}`}>
            <Label bsStyle="primary">{props.name}</Label>
        </LinkContainer>
    );
}

export default Ingredient;
