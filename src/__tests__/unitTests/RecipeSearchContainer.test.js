import React from 'react';
import {shallow} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import RecipeSearch from 'containers/RecipeSearch';
import Connection from '../../scripts/Connection';

describe('RecipeSearch', () => {
    describe('recipeSearch - successfull result', () => {
        let wrapper = null;

        beforeAll(() => {
            Connection.get = jest
                .spyOn(Connection, 'get')
                .mockReturnValue([{id: 1, name: 'Test'}]);

            wrapper = shallow(<RecipeSearch render={() => {}} />);
        });

        it('should call Connection.get with ingredient value', () => {
            const spy = jest.spyOn(Connection, 'get');

            wrapper.instance().recipeSearch('Test');

            expect(spy).toHaveBeenCalledWith('ingredients/recipes?ingredient=Test');
        });

        it('should set correct state when search returns valid results', async() => {
            await wrapper.instance().recipeSearch('Test');

            expect(wrapper.state()).toEqual({
                loading: false,
                result: true,
                recipes: [{id: 1, name: 'Test'}]
            });
        });

        afterAll(() => {
            Connection.get.mockRestore();
        });
    });

    describe('recipeSearch - unsuccessfull result', () => {
        it('should set correct state when search returns nothing', async() => {
            Connection.get = jest.spyOn(Connection, 'get').mockReturnValue(null);
            const wrapper = shallow(<RecipeSearch render={() => {}} />);

            await wrapper.instance().recipeSearch('Test');

            expect(wrapper.state()).toEqual({
                loading: false,
                result: true,
                recipes: null
            });

            Connection.get.mockRestore();
        });
    });
});
