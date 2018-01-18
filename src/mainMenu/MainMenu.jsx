import React from 'react';

import Page from 'components/Page';
import MenuButtons from 'mainMenu/MenuButtons';

function MainMenu() {
    return (
        <Page heading="Main menu" hideIcon>
            <MenuButtons />
        </Page>
    );
}

export default MainMenu;
