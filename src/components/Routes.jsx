import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import IngredientPage from 'ingredientPage/IngredientPage';
import MainMenu from 'mainMenu/MainMenu';
import RecipeSearchPage from 'searchPage/RecipeSearchPage';
import AddRecipeContainer from 'addRecipePage/AddRecipeContainer';
import RecipePageContainer from 'recipePage/RecipePageContainer';

function Routes() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Route path="/" exact component={MainMenu} />
                <Route path="/add" component={AddRecipeContainer} />
                <Route path="/recipe/:id" exact component={RecipePageContainer} />
                <Route path="/search" component={RecipeSearchPage} />
                <Route path="/ingredient/:name" exact component={IngredientPage} />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default Routes;
