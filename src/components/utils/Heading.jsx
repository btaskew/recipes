import React from 'react';

import {Modal} from 'react-bootstrap';
import HomeIcon from 'components/utils/HomeIcon';

function Heading(props) {
    return (
        <Modal.Header className="heading">
            <Modal.Title>
                {props.text}
                {props.homeIcon && <HomeIcon /> }
            </Modal.Title>
        </Modal.Header>
    );
}

export default Heading;
