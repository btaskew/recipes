import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import OptionLink from 'components/OptionLink';

function MenuButtons() {
    return (
        <ListGroup>
            <OptionLink link="/search" text="Search by ingredient" />
            <OptionLink link="/add" text="Add recipe" />
        </ListGroup>
    );
}

export default MenuButtons;
