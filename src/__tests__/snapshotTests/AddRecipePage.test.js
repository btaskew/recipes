import React from 'react';
import renderer from 'react-test-renderer';

import AddRecipeView from 'addRecipePage/AddRecipeView';
import {MemoryRouter} from 'react-router';

describe('Add recipe page', () => {
    it('renders loading correctly', () => {
        const addRecipePage = renderer
            .create(
                <MemoryRouter>
                    <AddRecipeView
                        loading={true}
                        success={false}
                        handleSubmit={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(addRecipePage).toMatchSnapshot();
    });

    it('renders an error correctly', () => {
        const addRecipePage = renderer
            .create(
                <MemoryRouter>
                    <AddRecipeView
                        loading={false}
                        success={false}
                        handleSubmit={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(addRecipePage).toMatchSnapshot();
    });
});
