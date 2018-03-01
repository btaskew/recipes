import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import InputForm from 'components/InputForm';
import {Alert} from 'react-bootstrap';

describe('InputForm', () => {
    it('should display the passed in placeholder and button text', () => {
        const wrapper = mount(
            <InputForm inputText="Test holder" buttonText="Test button" submitForm={() => {}} />
        );

        expect(wrapper.find('input').props().placeholder).toBe('Test holder');
        expect(wrapper.find('button').props().children).toBe('Test button');
    });

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
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<InputForm submitForm={() => {}} />);
        });

        it('should set noValue when submitted with no input', () => {
            wrapper.instance().handleSubmit();

            expect(wrapper.state('noValue')).toBeTruthy();
        });

        it('should reset the state when submitted with valid input', () => {
            wrapper.setState({value: 'Test'});

            wrapper.instance().handleSubmit();

            expect(wrapper.state('noValue')).toBeFalsy();
            expect(wrapper.state('value')).toBe('');
        });

        it('should call props.submitForm with valid input', () => {
            const mockProps = {
                submitForm: () => {}
            };
            const spy = jest.spyOn(mockProps, 'submitForm');

            wrapper = shallow(<InputForm submitForm={mockProps.submitForm} />);

            wrapper.setState({value: 'Test'});
            wrapper.instance().handleSubmit();

            expect(spy).toHaveBeenCalledWith('Test');

            spy.mockClear();
        });
    });

    describe('User input', () => {
        it('should call handleChange when the input is changed', () => {
            const spy = jest.spyOn(InputForm.prototype, 'handleChange');

            const wrapper = mount(<InputForm submitForm={() => {}} />);

            wrapper.find('input').simulate('change', {target: {value: 'Test'}});

            expect(spy).toHaveBeenCalled();
        });

        it('should call handleSubmit when the button is clicked', () => {
            const spy = jest.spyOn(InputForm.prototype, 'handleSubmit');

            const wrapper = mount(<InputForm submitForm={() => {}} />);

            wrapper.find('button').simulate('click');

            expect(spy).toHaveBeenCalled();
        });
    });
});
