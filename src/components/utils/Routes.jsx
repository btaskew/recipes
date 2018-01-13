import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import MainMenu from 'components/MainMenu';
import AddRecipeContainer from 'containers/AddRecipeContainer';
import IngredientPageContainer from 'containers/IngredientPageContainer';
import RecipePageContainer from 'containers/RecipePageContainer';
import RecipeSearchContainer from 'containers/RecipeSearchContainer';

function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={MainMenu} />
                <Route path="/add" component={AddRecipeContainer} />
                <Route path="/search" component={RecipeSearchContainer} />
                <Route path="/recipe/:id/:name" component={RecipePageContainer} />
                <Route path="/ingredient/:id/:name" component={IngredientPageContainer} />
            </div>
        </BrowserRouter>
    );
}

export default Routes;
