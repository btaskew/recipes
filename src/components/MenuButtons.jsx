import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

function MenuButtons() {
    return (
        <ListGroup>
            <ListGroupItem>Search by recipe</ListGroupItem>
            <ListGroupItem>View all</ListGroupItem>
            <ListGroupItem>Add recipe</ListGroupItem>
        </ListGroup>
    );
}

export default MenuButtons;
