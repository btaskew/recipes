import React from 'react';

import {Modal} from 'react-bootstrap';
import Routes from 'components/utils/Routes';

function App() {
    return (
        <Modal show={true}>
            <Routes />
        </Modal>
    );
}

export default App;
