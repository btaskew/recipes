import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import IngredientsList from 'recipePage/IngredientsList';
import Ingredient from 'recipePage/Ingredient';
import {Alert} from 'react-bootstrap';

const testIngredients = [
    {
        $loki: 1,
        name: 'Ingredient 1'
    },
    {
        $loki: 2,
        name: 'Ingredient 2'
    },
    {
        $loki: 3,
        name: 'Ingredient 3'
    }
];

describe('IngredientsList', () => {
    it('should display nothing when no ingredients provided', () => {
        const wrapper = shallow(<IngredientsList ingredients={null} />);

        expect(wrapper.instance()).toBeNull();
    });

    it('should display an alert when empty ingredients list provided', () => {
        const wrapper = shallow(<IngredientsList ingredients={[]} />);

        expect(wrapper.find(Alert)).toHaveLength(1);
    });

    it('should display one ingredient', () => {
        const wrapper = shallow(<IngredientsList ingredients={[testIngredients[0]]} />);

        expect(wrapper.find(Ingredient)).toHaveLength(1);
    });

    it('should display multiple ingredients', () => {
        const wrapper = shallow(<IngredientsList ingredients={testIngredients} />);

        expect(wrapper.find(Ingredient)).toHaveLength(3);
    });
});
