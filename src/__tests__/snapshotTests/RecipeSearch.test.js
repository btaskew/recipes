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
                    <RecipeSearchPage />
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
                    <RecipeSearchView loading={true} handleSubmit={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });

    it('renders with no result correctly', () => {
        const searchPage = renderer
            .create(
                <MemoryRouter>
                    <RecipeSearchView loading={true} noResult={true} handleSubmit={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });

    it('renders with results correctly', () => {
        const searchPage = renderer
            .create(
                <MemoryRouter>
                    <RecipeSearchView loading={true} recipes={[]} handleSubmit={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(searchPage).toMatchSnapshot();
    });
});
