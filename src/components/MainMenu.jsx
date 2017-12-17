import React from 'react';
import {Modal} from 'react-bootstrap';

import Heading from 'components/Heading';
import MenuButtons from 'components/MenuButtons';

function MainMenu() {
    return (
        <Modal show={true}>
            <Heading text="Main Menu" />
            <Modal.Body>
                <MenuButtons />
            </Modal.Body>
        </Modal>
    );
}

export default MainMenu;
