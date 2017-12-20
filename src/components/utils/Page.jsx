import React from 'react';
import {Modal} from 'react-bootstrap';

import Heading from 'components/utils/Heading';

function Page(props) {
    return (
        <React.Fragment>
            <Heading text={props.heading} />
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </React.Fragment>
    );
}

export default Page;
