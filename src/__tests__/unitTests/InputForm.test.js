import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import InputForm from 'components/InputForm';
import {Alert} from 'react-bootstrap';

describe('InputForm', () => {

    it('should display the value stored in state', () => {
        const wrapper = mount(<InputForm submitForm={() => {}} />);
        wrapper.setState({value: 'Test input'});

        expect(wrapper.find('input').props().value).toBe('Test input');
    });

    it('should display an alert when noValue is true', () => {
        const wrapper = shallow(<InputForm submitForm={() => {}} />);
        wrapper.setState({noValue: true});

        expect(wrapper.find(Alert)).toHaveLength(1);
    });

    describe('handleChange', () => {
        it('should update the value in state', () => {
            const wrapper = shallow(<InputForm submitForm={() => {}} />);
            const value = {
                target: {value: 'Test'}
            };

            wrapper.instance().handleChange(value);

            expect(wrapper.state('value')).toBe('Test');
        });
    });

    describe('handleSubmit', () => {
        it('should set noValue when submitted with no input', () => {
            const wrapper = shallow(<InputForm submitForm={() => {}} />);

            wrapper.instance().handleSubmit();

            expect(wrapper.state('noValue')).toBeTruthy();
        });

        it('should reset the state when submitted with valid input', () => {
            const wrapper = shallow(<InputForm submitForm={() => {}} />);
            wrapper.setState({value: 'Test'});

            wrapper.instance().handleSubmit();

            expect(wrapper.state('noValue')).toBeFalsy();
            expect(wrapper.state('value')).toBe('');
        });

        it('should call props.submitForm when submitted with valid input', () => {
            const mockProps = {
                submitForm: () => {}
            };
            const spy = jest.spyOn(mockProps, 'submitForm');

            const wrapper = shallow(<InputForm submitForm={mockProps.submitForm} />);

            wrapper.setState({value: 'Test'});

            wrapper.instance().handleSubmit();

            expect(spy).toHaveBeenCalled();
        });
    });

});
