import React from 'react';
import PropTypes from 'prop-types';

import {Modal} from 'react-bootstrap';
import HomeIcon from 'components/HomeIcon';

function Heading(props) {
    return (
        <Modal.Header className="heading">
            <Modal.Title>
                {props.text}
                {!props.hideIcon && <HomeIcon />}
            </Modal.Title>
        </Modal.Header>
    );
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    hideIcon: PropTypes.bool
};
Heading.defaultProps = {
    hideIcon: false
};

export default Heading;
