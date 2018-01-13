import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import IngredientPage from 'components/IngredientPage';
import MainMenu from 'components/MainMenu';
import RecipeSearchPage from 'components/RecipeSearchPage';
import AddRecipeContainer from 'containers/AddRecipeContainer';
import RecipePageContainer from 'containers/RecipePageContainer';

function Routes() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Route path="/" exact component={MainMenu} />
                <Route path="/add" component={AddRecipeContainer} />
                <Route path="/recipe/:id" component={RecipePageContainer} />
                <Route path="/search" component={RecipeSearchPage} />
                <Route path="/ingredient/:name" component={IngredientPage} />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default Routes;
