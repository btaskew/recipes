import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import AddRecipeContainer from 'addRecipePage/AddRecipeContainer';
import Recipe from 'scripts/Recipe';

describe('AddRecipeContainer', () => {
    describe('handleSubmit - successfull result', () => {
        let wrapper = null;

        beforeAll(() => {
            Recipe.addRecipe = jest
                .spyOn(Recipe, 'addRecipe')
                .mockReturnValue({$loki: 1, name: 'Test'});

            wrapper = shallow(<AddRecipeContainer />);
        });

        it('should call Recipe.addRecipe with name value', () => {
            const spy = jest.spyOn(Recipe, 'addRecipe');

            wrapper.instance().handleSubmit('Test');

            expect(spy).toHaveBeenCalledWith('Test');
        });

        it('should set correct state when recipe saved successfully', () => {
            wrapper.instance().handleSubmit('Test');

            expect(wrapper.state()).toEqual({
                error: false,
                errorMessage: null,
                loading: false,
                success: true,
                redirectPath: '/recipe/1'
            });
        });

        afterAll(() => {
            Recipe.addRecipe.mockRestore();
        });
    });

    describe('handleSubmit - unsuccessfull result', () => {
        it('should set correct state when recipe not saved', () => {
            Recipe.addRecipe = jest.spyOn(Recipe, 'addRecipe').mockReturnValue(null);

            const wrapper = shallow(<AddRecipeContainer />);

            wrapper.instance().handleSubmit('Test');

            expect(wrapper.state()).toEqual({
                error: true,
                errorMessage: 'Error saving recipe. Please try again later',
                loading: false,
                success: false,
                redirectPath: null
            });
        });
    });
});
