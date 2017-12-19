import React, {Component} from 'react';

import {Modal} from 'react-bootstrap';
import Routes from 'components/Routes';

function App() {
    return (
        <Modal show={true}>
            <Routes />
        </Modal>
    );
}

export default App;
