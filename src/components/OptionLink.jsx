import React from 'react';

import {ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function OptionLink(props) {
    return (
        <LinkContainer to={props.link}>
            <ListGroupItem>{props.text}</ListGroupItem>
        </LinkContainer>
    );
}

export default OptionLink;
