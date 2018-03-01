import React from 'react';
import {shallow} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import AddRecipeView from 'addRecipePage/AddRecipeView';
import {Redirect} from 'react-router';

describe('AddRecipeView', () => {
    it('should render a redirect when passed success as true', () => {
        const wrapper = shallow(
            <AddRecipeView
                loading={false}
                error={false}
                success={true}
                redirectPath="#"
                handleSubmit={() => {}}
            />
        );

        expect(wrapper.find(Redirect)).toHaveLength(1);
    });
});
