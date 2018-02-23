import React from 'react';
import renderer from 'react-test-renderer';

import RecipePageView from 'recipePage/RecipePageView';
import {MemoryRouter} from 'react-router';

describe('Recipe page', () => {
    it('renders loading correctly', () => {
        const recipePage = renderer
            .create(
                <MemoryRouter>
                    <RecipePageView loading={true} heading="Loading" />
                </MemoryRouter>
            )
            .toJSON();
        expect(recipePage).toMatchSnapshot();
    });

    it('renders an error correctly', () => {
        const recipePage = renderer
            .create(
                <MemoryRouter>
                    <RecipePageView
                        loading={true}
                        heading="Error"
                        error={true}
                        errorMessage="Error"
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(recipePage).toMatchSnapshot();
    });

    it('renders with ingredients correctly', () => {
        const recipePage = renderer
            .create(
                <MemoryRouter>
                    <RecipePageView
                        loading={true}
                        heading="Error"
                        ingredients={[]}
                        addIngredient={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(recipePage).toMatchSnapshot();
    });
});
