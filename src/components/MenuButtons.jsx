import React from 'react';

import {ListGroup} from 'react-bootstrap';
import OptionLink from 'components/utils/OptionLink';

function MenuButtons() {
    return (
        <ListGroup>
            <OptionLink link="/search" text="Search by ingredient" />
            <OptionLink link="/add" text="Add recipe" />
        </ListGroup>
    );
}

export default MenuButtons;
