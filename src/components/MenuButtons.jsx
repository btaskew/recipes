import React from 'react';

import {ListGroup} from 'react-bootstrap';
import OptionLink from 'components/utils/OptionLink';

function MenuButtons() {
    return (
        <ListGroup>
            <OptionLink link="/search" text="Search by recipe" />
            <OptionLink link="/all" text="View all" />
            <OptionLink link="/add" text="Add recipe" />
        </ListGroup>
    );
}

export default MenuButtons;
