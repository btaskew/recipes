import React from 'react';

import {Modal} from 'react-bootstrap';
import Heading from 'components/utils/Heading';

function PageContents(props) {
    return (
        <React.Fragment>
            <Heading text={props.heading} hideIcon={props.hideIcon} />
            <Modal.Body>{props.children}</Modal.Body>
        </React.Fragment>
    );
}

export default PageContents;
