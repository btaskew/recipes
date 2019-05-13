import React from 'react';
import {shallow} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import AddRecipeContainer from 'addRecipePage/AddRecipeContainer';
import Connection from '../../scripts/Connection';

describe('AddRecipeContainer', () => {
    describe('handleSubmit - successfull result', () => {
        let wrapper = null;

        beforeAll(() => {
            Connection.post = jest
                .spyOn(Connection, 'post')
                .mockReturnValue({id: 1, name: 'Test'});

            wrapper = shallow(<AddRecipeContainer />);
        });

        it('should call Connection.post with name value', () => {
            const spy = jest.spyOn(Connection, 'post');

            wrapper.instance().handleSubmit('Test');

            expect(spy).toHaveBeenCalledWith('recipes', {name: 'Test'});
        });

        it('should set correct state when recipe saved successfully', async() => {
            await wrapper.instance().handleSubmit('Test');

            expect(wrapper.state()).toEqual({
                loading: false,
                success: true,
                result: true,
                redirectPath: '/recipe/1'
            });
        });

        afterAll(() => {
            Connection.post.mockRestore();
        });
    });

    describe('handleSubmit - unsuccessfull result', () => {
        it('should set correct state when recipe not saved', async () => {
            Connection.post = jest.spyOn(Connection, 'post').mockReturnValue(null);

            const wrapper = shallow(<AddRecipeContainer />);

            await wrapper.instance().handleSubmit('Test');

            expect(wrapper.state()).toEqual({
                loading: false,
                success: false,
                result: true,
                redirectPath: null
            });
        });
    });
});
