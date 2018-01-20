import React from 'react';
import PropTypes from 'prop-types';

import {ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function OptionLink(props) {
    return (
        <LinkContainer to={props.link}>
            <ListGroupItem>{props.text}</ListGroupItem>
        </LinkContainer>
    );
}

OptionLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default OptionLink;
