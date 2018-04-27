import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import Heading from 'components/Heading';

function PageContents(props) {
    return (
        <React.Fragment>
            <Heading text={props.heading} hideIcon={props.hideIcon} />
            <Modal.Body>{props.children}</Modal.Body>
        </React.Fragment>
    );
}

PageContents.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.string,
    hideIcon: PropTypes.bool
};
PageContents.defaultProps = {
    heading: null,
    hideIcon: false
};

export default PageContents;
