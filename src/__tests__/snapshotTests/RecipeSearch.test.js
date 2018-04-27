import React from 'react';
import renderer from 'react-test-renderer';

import RecipeSearchView from 'recipeSearch/RecipeSearchView';
import RecipeSearchPage from 'recipeSearch/RecipeSearchPage';
import {MemoryRouter} from 'react-router';

describe('Recipe search page', () => {
    it('renders correctly', () => {
        const searchPage = renderer
            .create(
                <MemoryRouter>
                    <RecipeSearchPage result={false}  />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });
});

describe('Recipe search view', () => {
    it('renders loading correctly', () => {
        const searchPage = renderer
            .create(
                <MemoryRouter>
                    <RecipeSearchView loading={true} result={false} handleSubmit={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });

    it('renders with no result correctly', () => {
        const searchPage = renderer
            .create(
                <MemoryRouter>
                    <RecipeSearchView loading={true} recipes={null} result={true} handleSubmit={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });

    it('renders with results correctly', () => {
        const testRecipes = [
            {
                $loki: 1,
                name: 'Recipe 1'
            },
            {
                $loki: 2,
                name: 'Recipe 2'
            }
        ];

        const searchPage = renderer
            .create(
                <MemoryRouter>
                    <RecipeSearchView loading={false} recipes={testRecipes} result={true} handleSubmit={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });
});
