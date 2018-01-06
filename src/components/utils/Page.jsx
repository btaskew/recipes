import React from 'react';

import {Alert} from 'react-bootstrap';
import PageContents from 'components/utils/PageContents';

function Page(props) {
    if (props.error) {
        return (
            <PageContents
                heading={props.heading ? props.heading : 'Oops!'}
                hideIcon={props.hideIcon}
            >
                <Alert bsStyle="danger">
                    {props.errorMessage ? (
                        props.errorMessage
                    ) : (
                        <React.Fragment>
                            Error loading results, please try again later
                        </React.Fragment>
                    )}
                </Alert>
            </PageContents>
        );
    }

    if (props.noResult) {
        return (
            <PageContents
                heading={props.heading ? props.heading : 'No result'}
                hideIcon={props.hideIcon}
            >
                <Alert bsStyle="info">No results found</Alert>
            </PageContents>
        );
    }

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
