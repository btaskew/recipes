import React from 'react';
import {shallow} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import RecipesList from 'components/RecipesList';
import OptionLink from 'components/OptionLink';
import {Alert} from 'react-bootstrap';

const testRecipes = [
    {
        id: 1,
        name: 'Recipe 1'
    },
    {
        id: 2,
        name: 'Recipe 2'
    },
    {
        id: 3,
        name: 'Recipe 3'
    }
];

describe('RecipesList', () => {
    it('should display an alert when no recipes provided', () => {
        const wrapper = shallow(<RecipesList recipes={[]} />);

        expect(wrapper.find(Alert)).toHaveLength(1);
    });

    it('should display one recipe', () => {
        const wrapper = shallow(<RecipesList recipes={[testRecipes[0]]} />);

        expect(wrapper.find(OptionLink)).toHaveLength(1);
    });

    it('should display multiple recipes', () => {
        const wrapper = shallow(<RecipesList recipes={testRecipes} />);

        expect(wrapper.find(OptionLink)).toHaveLength(3);
    });
});
