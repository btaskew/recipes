import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import MainMenu from 'pages/MainMenu';
import SearchPage from 'pages/SearchPage';
import RecipePage from 'pages/RecipePage';

function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={MainMenu} />
                <Route path="/search" component={SearchPage} />
                <Route path="/recipe/:id/:name" component={RecipePage} />
            </div>
        </BrowserRouter>
    );
}

export default Routes;
