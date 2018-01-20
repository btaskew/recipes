import React from 'react';
import PropTypes from 'prop-types';

import {Alert} from 'react-bootstrap';
import PageContents from 'components/PageContents';

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

Page.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
    heading: PropTypes.string,
    hideIcon: PropTypes.bool
};
Page.defaultProps = {
    heading: null,
    hideIcon: false,
    loading: false
};

export default Page;
