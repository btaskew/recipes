import React from 'react';
import renderer from 'react-test-renderer';

import IngredientPage from 'ingredientPage/IngredientPage';
import IngredientPageView from 'ingredientPage/IngredientPageView';
import {MemoryRouter} from 'react-router';

describe('Ingredient page', () => {
    it('renders correctly', () => {
        const ingredientPage = renderer
            .create(
                <MemoryRouter>
                    <IngredientPage />
                </MemoryRouter>
            )
            .toJSON();
        expect(ingredientPage).toMatchSnapshot();
    });
});

describe('Ingredient page view', () => {
    it('renders loading correctly', () => {
        const ingredientPage = renderer
            .create(
                <MemoryRouter>
                    <IngredientPageView loading={true} ingredient="Test" getRecipes={() => {}} />
                </MemoryRouter>
            )
            .toJSON();
        expect(ingredientPage).toMatchSnapshot();
    });

    it('renders when no result correctly', () => {
        const ingredientPage = renderer
            .create(
                <MemoryRouter>
                    <IngredientPageView
                        loading={false}
                        recipes={null}
                        ingredient="Test"
                        getRecipes={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(ingredientPage).toMatchSnapshot();
    });

    it('renders with recipes correctly', () => {
        const testRecipes = [
            {
                id: 1,
                name: 'Recipe 1'
            },
            {
                id: 2,
                name: 'Recipe 2'
            }
        ];

        const ingredientPage = renderer
            .create(
                <MemoryRouter>
                    <IngredientPageView
                        loading={false}
                        recipes={testRecipes}
                        ingredient="Test"
                        getRecipes={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(ingredientPage).toMatchSnapshot();
    });
});
