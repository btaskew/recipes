import React from 'react';

import {Alert} from 'react-bootstrap';
import PageContents from 'components/utils/PageContents';

function Page(props) {
    if (props.error) {
        return (
            <PageContents heading="Error" hideIcon={props.hideIcon}>
                <Alert bsStyle="danger">
                    Error loading results, please try again later
                </Alert>
            </PageContents>
        );
    }

    if (props.noResult) {
        return (
            <PageContents heading="No result" hideIcon={props.hideIcon}>
                <Alert bsStyle="info">No results found</Alert>
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
