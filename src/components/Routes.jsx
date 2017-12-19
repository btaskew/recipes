import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import MainMenu from 'components/MainMenu';
import SearchPage from 'components/SearchPage';

function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={MainMenu} />
                <Route path="/search" exact component={SearchPage} />
            </div>
        </BrowserRouter>
    );
}

export default Routes;
