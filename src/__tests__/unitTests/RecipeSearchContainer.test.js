import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import RecipeSearch from 'containers/RecipeSearch';
import Recipe from 'scripts/Recipe';

describe('RecipeSearch', () => {
    describe('recipeSearch - successfull result', () => {
        let wrapper = null;

        beforeAll(() => {
            Recipe.findByIngredient = jest
                .spyOn(Recipe, 'findByIngredient')
                .mockReturnValue([{$loki: 1, name: 'Test'}]);

            wrapper = shallow(<RecipeSearch render={() => {}} />);
        });

        it('should call Recipe.findByIngredient with ingredient value', () => {
            const spy = jest.spyOn(Recipe, 'findByIngredient');

            wrapper.instance().recipeSearch('Test');

            expect(spy).toHaveBeenCalledWith('Test');
        });

        it('should set correct state when search returns valid results', async() => {
            await wrapper.instance().recipeSearch('Test');

            expect(wrapper.state()).toEqual({
                loading: false,
                noResult: false,
                recipes: [{$loki: 1, name: 'Test'}]
            });
        });

        afterAll(() => {
            Recipe.findByIngredient.mockRestore();
        });
    });

    describe('recipeSearch - unsuccessfull result', () => {
        it('should set correct state when search returns nothing', async() => {
            Recipe.findByIngredient = jest.spyOn(Recipe, 'findByIngredient').mockReturnValue(null);
            const wrapper = shallow(<RecipeSearch render={() => {}} />);

            await wrapper.instance().recipeSearch('Test');

            expect(wrapper.state()).toEqual({
                loading: false,
                noResult: true,
                recipes: null
            });

            Recipe.findByIngredient.mockRestore();
        });
    });
});
