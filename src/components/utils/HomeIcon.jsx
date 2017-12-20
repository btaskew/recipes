import React from 'react';

import {LinkContainer} from 'react-router-bootstrap';
import {Glyphicon} from 'react-bootstrap';

function HomeIcon () {
    return (
        <LinkContainer to="/">
            <Glyphicon glyph="home" className="float-right" />
        </LinkContainer>
    );
}

export default HomeIcon;
