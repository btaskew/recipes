import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IngredientPage from 'ingredientPage/IngredientPage';
import MainMenu from 'mainMenu/MainMenu';
import RecipeSearchPage from 'recipeSearch/RecipeSearchPage';
import AddRecipeContainer from 'addRecipePage/AddRecipeContainer';
import RecipePageContainer from 'recipePage/RecipePageContainer';
import NoRoute from 'components/NoRoute';

function Routes() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={MainMenu} />
                    <Route path="/add" exact component={AddRecipeContainer} />
                    <Route path="/recipe/:id" exact component={RecipePageContainer} />
                    <Route path="/search" exact component={RecipeSearchPage} />
                    <Route path="/ingredient/:name" exact component={IngredientPage} />
                    <Route component={NoRoute} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default Routes;
