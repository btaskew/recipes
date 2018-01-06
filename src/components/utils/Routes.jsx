import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
// import MainMenu from 'pages/MainMenu';
// import SearchPage from 'pages/SearchPage';
// import AddRecipePage from 'pages/AddRecipePage';
import RecipePageContainer from 'containers/RecipePageContainer';
import IngredientPageContainer from 'containers/IngredientPageContainer';
// import IngredientPage from 'pages/IngredientPage';

function Routes() {
    return (
        <BrowserRouter>
            <div>
                {/* <Route path="/" exact component={MainMenu} />
                <Route path="/search" component={SearchPage} />
                <Route path="/add" component={AddRecipePage} /> */}
                <Route path="/recipe/:id/:name" component={RecipePageContainer} />
                <Route path="/ingredient/:id/:name" component={IngredientPageContainer} />
            </div>
        </BrowserRouter>
    );
}

export default Routes;
