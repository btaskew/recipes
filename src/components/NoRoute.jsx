import React from 'react';

import {Alert} from 'react-bootstrap';
import Page from 'components/Page';

function Heading(props) {
    return (
        <Page heading="No route found!">
            <Alert bsStyle="danger">404 - No route found!</Alert>
        </Page>
    );
}

export default Heading;