import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input.jsx';

describe('<Input />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <Input { ...props } />;
    };

    describe('when initialized without optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({}));
        });

        it('should have the correct class', function() {
            expect(component.find('div').hasClass('a-input')).toBe(true);
        });

        it('should include a input field', function() {
            const inputField = component.find('input');
            const labelProps = inputField.props();

            expect(labelProps).toEqual({
                'className': 'a-input__field',
                'placeholder': '',
                'type': 'text',
                'onBlur': '',
                'onFocus': ''
            });

            expect(inputField.node.ref).toBe('inputField');
        });
    });

    describe('when initialized with optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'placeholder': 'Gscheider placeholder!',
                'className': 'banana',
                'focus': true,
                'type': 'password'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('div').hasClass('a-input banana')).toBe(true);
        });

        it('should include a input field', function() {
            const inputField = component.find('input');
            const labelProps = inputField.props();

            expect(labelProps).toEqual({
                'className': 'a-input__field',
                'placeholder': 'Gscheider placeholder!',
                'type': 'password',
                'onBlur': '',
                'onFocus': ''
            });

            expect(inputField.node.ref).toBe('inputField');
        });
    });
});
