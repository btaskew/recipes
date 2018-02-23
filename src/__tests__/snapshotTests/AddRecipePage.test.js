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
                        error={false}
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
                        error={true}
                        errorMessage={"Error"}
                        success={false}
                        handleSubmit={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(addRecipePage).toMatchSnapshot();
    });

    it('renders normally correctly', () => {
        const addRecipePage = renderer
            .create(
                <MemoryRouter>
                    <AddRecipeView
                        loading={false}
                        error={false}
                        success={false}
                        handleSubmit={() => {}}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(addRecipePage).toMatchSnapshot();
    });
});
