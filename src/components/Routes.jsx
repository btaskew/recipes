import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import MainMenu from 'components/MainMenu';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainMenu} />
        </BrowserRouter>
    );
}

export default Routes;
