import React from 'react';

import {Alert} from 'react-bootstrap';
import PageContents from 'components/utils/PageContents';

function Page(props) {
    if (props.error) {
        return (
            <PageContents heading="Error" homeIcon={props.homeIcon}>
                <Alert bsStyle="danger">
                    Error loading results, please try again later
                </Alert>
            </PageContents>
        );
    }

    if (props.noResult) {
        return (
            <PageContents heading="No result" homeIcon={props.homeIcon}>
                <Alert bsStyle="info">No results found</Alert>
            </PageContents>
        );
    }

    return (
        <PageContents heading={props.heading} homeIcon={props.homeIcon}>
            {props.children}
        </PageContents>
    );
}

export default Page;
