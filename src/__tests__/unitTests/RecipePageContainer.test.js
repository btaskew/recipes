import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import RecipePageContainer from 'recipePage/RecipePageContainer';
import Ingredient from 'scripts/Ingredient';
import Recipe from 'scripts/Recipe';

const idProp = {params: {id: 1}};

describe('RecipePageContainer', () => {

    describe('componentDidMount', () => {

        describe('Successfull result', () => {
            beforeAll(() => {
                mockRecipeSearch({name: 'Test', ingredients: []});
            });

            it('should call Recipe.findById with id value', () => {
                const spy = jest.spyOn(Recipe, 'findById');

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                expect(spy).toHaveBeenCalledWith(1);
            });

            it('should set correct state when search returns valid results', () => {
                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                expect(wrapper.state()).toEqual({
                    heading: 'Test',
                    loading: false,
                    error: false,
                    errorMessage: null,
                    ingredients: []
                });
            });

            afterAll(() => {
                Recipe.findById.mockRestore();
            });
        });

        describe('Unsuccessfull result', () => {
            it('should set correct state when search returns nothing', () => {
                mockRecipeSearch(null);

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                expect(wrapper.state()).toEqual({
                    heading: 'Oops!',
                    loading: false,
                    error: true,
                    errorMessage: 'Error loading recipe. Please try again later',
                    ingredients: null
                });

                Recipe.findById.mockRestore();
            });
        });

    });

    describe('addIngredient', () => {

        beforeAll(() => {
            mockRecipeSearch({name: 'Test Recipe', ingredients: ['Test 1']});
        });

        describe('Successfull result', () => {
            it('should set correct state when add ingredient successfull', () => {
                mockAddIngredient('Test 2');

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                wrapper.instance().addIngredient('Test 2');

                expect(wrapper.state()).toEqual({
                    heading: 'Test Recipe',
                    loading: false,
                    error: false,
                    errorMessage: null,
                    ingredients: ['Test 1', 'Test 2']
                });

                Ingredient.addIngredient.mockRestore();
            });
        });

        describe('Adding existing ingredient', () => {
            it('should set correct state when adding already existing ingredient', () => {
                mockAddIngredient('Ingredient present');

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                wrapper.instance().addIngredient('Test 1');

                expect(wrapper.state()).toEqual({
                    heading: 'Test Recipe',
                    loading: false,
                    error: true,
                    errorMessage: 'Ingredient already in the recipe! Please add a new ingredient',
                    ingredients: ['Test 1']
                });

                Ingredient.addIngredient.mockRestore();
            });
        });

        describe('Unsuccessfull result', () => {
            it('should set correct state when adding already existing ingredient', () => {
                mockAddIngredient(null);

                const wrapper = shallow(<RecipePageContainer match={idProp} />);

                wrapper.instance().addIngredient('Test 1');

                expect(wrapper.state()).toEqual({
                    heading: 'Test Recipe',
                    loading: false,
                    error: true,
                    errorMessage: 'Error adding ingredient. Please try again later',
                    ingredients: ['Test 1']
                });

                Ingredient.addIngredient.mockRestore();
            });
        });

        afterAll(() => {
            Recipe.findById.mockRestore();
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
    Recipe.findById = jest.spyOn(Recipe, 'findById').mockReturnValue(value);
}

function mockAddIngredient(value) {
    Ingredient.addIngredient = jest.spyOn(Ingredient, 'addIngredient').mockReturnValue(value);
}
