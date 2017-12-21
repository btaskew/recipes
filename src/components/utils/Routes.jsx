import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import MainMenu from 'pages/MainMenu';
import SearchPage from 'pages/SearchPage';
import AddRecipe from 'pages/AddRecipe';
import RecipePage from 'pages/RecipePage';
import IngredientPage from 'pages/IngredientPage';

function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={MainMenu} />
                <Route path="/search" component={SearchPage} />
                <Route path="/add" component={AddRecipe} />
                <Route path="/recipe/:id/:name" component={RecipePage} />
                <Route path="/ingredient/:id/:name" component={IngredientPage} />
            </div>
        </BrowserRouter>
    );
}

export default Routes;
