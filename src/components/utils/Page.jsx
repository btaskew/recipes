import React from 'react';

import {Alert} from 'react-bootstrap';
import PageContents from 'components/utils/PageContents';

function Page(props) {
    if (props.loading) {
        return (
            <PageContents
                heading={props.heading ? props.heading : 'Loading...'}
                hideIcon={props.hideIcon}
            >
                <Alert bsStyle="info">Loading...</Alert>
            </PageContents>
        );
    }

    return (
        <PageContents heading={props.heading} hideIcon={props.hideIcon}>
            {props.children}
        </PageContents>
    );
}

export default Page;
