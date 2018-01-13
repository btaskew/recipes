import React from 'react';

import MenuButtons from 'components/MenuButtons';
import Page from 'components/utils/Page';

function MainMenu() {
    return (
        <Page heading="Main menu" hideIcon>
            <MenuButtons />
        </Page>
    );
}

export default MainMenu;
