import React from 'react';

import {Modal} from 'react-bootstrap';

function Heading({text}) {
    return (
        <Modal.Header className="heading">
            <Modal.Title>{text}</Modal.Title>
        </Modal.Header>
    );
}

export default Heading;
