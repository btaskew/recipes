import React from 'react';
import {Modal} from 'react-bootstrap';

import Heading from 'components/Heading';

function Page(props) {
    return (
        <Modal show={true}>
            <Heading text={props.heading} />
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}

export default Page;
