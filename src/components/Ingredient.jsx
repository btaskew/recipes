import React from 'react';

import {Label} from 'react-bootstrap';

function Ingredient(props) {
    return <Label bsStyle="primary">{props.name}</Label>;
}

export default Ingredient;
