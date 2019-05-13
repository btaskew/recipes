import React from 'react';
import {shallow} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import RecipePageContainer from 'recipePage/RecipePageContainer';
import Connection from 'scripts/Connection';

const idProp = {params: {id: 1}};

describe('RecipePageContainer', () => {

    describe('componentDidMount', () => {

        describe('Successfull result', () => {
            beforeAll(() => {
                mockRecipeSearch({name: 'Test', ingredients: []});
            });

            it('should try to fetch the recipe', () => {
                const spy = jest.spyOn(Connection, 'get');

                shallow(<RecipePageContainer match={idProp} />);

                expect(spy).toHaveBeenCalledWith('recipes/1');
            });

            it('should set correct state when search returns valid results', async() => {
                const wrapper = await shallow(<RecipePageContainer match={idProp} />);

                expect(wrapper.state()).toEqual({
                    heading: 'Test',
                    loading: false,
                    error: false,
                    errorMessage: null,
                    ingredients: []
                });
            });

            afterAll(() => {
                Connection.get.mockRestore();
            });
        });

        describe('Unsuccessfull result', () => {
            it('should set correct state when search returns nothing', async () => {
                mockRecipeSearch(null);

                const wrapper = await shallow(<RecipePageContainer match={idProp} />);

                expect(wrapper.state()).toEqual({
                    heading: 'Oops!',
                    loading: false,
                    error: true,
                    errorMessage: 'Error loading recipe. Please try again later',
                    ingredients: null
                });

                Connection.get.mockRestore();
            });
        });

    });

    describe('addIngredient', () => {

        beforeAll(() => {
            mockRecipeSearch({name: 'Test Recipe', ingredients: ['Test 1']});
        });

        describe('Successfull result', () => {
            it('should set correct state when add ingredient successfull', async() => {
                mockAddIngredient('Test 2');

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                await wrapper.instance().addIngredient('Test 2');

                expect(wrapper.state()).toEqual({
                    heading: 'Test Recipe',
                    loading: false,
                    error: false,
                    errorMessage: null,
                    ingredients: ['Test 1', 'Test 2']
                });

                Connection.post.mockRestore();
            });
        });

        describe('Adding existing ingredient', () => {
            it('should set correct state when adding already existing ingredient', async() => {
                mockAddIngredient('Ingredient present');

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                await wrapper.instance().addIngredient('Test 1');

                expect(wrapper.state()).toEqual({
                    heading: 'Test Recipe',
                    loading: false,
                    error: true,
                    errorMessage: 'Ingredient already in the recipe! Please add a new ingredient',
                    ingredients: ['Test 1']
                });

                Connection.post.mockRestore();
            });
        });

        describe('Unsuccessfull result', () => {
            it('should set correct state when adding already existing ingredient', async() => {
                mockAddIngredient(null);

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                await wrapper.instance().addIngredient('Test 1');

                expect(wrapper.state()).toEqual({
                    heading: 'Test Recipe',
                    loading: false,
                    error: true,
                    errorMessage: 'Error adding ingredient. Please try again later',
                    ingredients: ['Test 1']
                });

                Connection.post.mockRestore();
            });
        });

        afterAll(() => {
            Connection.get.mockRestore();
        });
    });

    describe('shouldComponentUpdate', () => {
        it('should return false when props are different', () => {
            mockRecipeSearch({name: 'Test Recipe', ingredients: ['Test 1']});

            const wrapper = shallow(<RecipePageContainer match={idProp} />);

            const result = wrapper.instance().shouldComponentUpdate({params: {id: 2}});

            expect(result).toBeFalsy();
        });
    });

});

function mockRecipeSearch(value) {
    Connection.get = jest.spyOn(Connection, 'get').mockReturnValue(value);
}

function mockAddIngredient(value) {
    Connection.post = jest.spyOn(Connection, 'post').mockReturnValue(value);
}
