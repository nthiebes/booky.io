import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

xdescribe('<Input />', function() {

  let component,
    onBlurCallback,
    onFocusCallback;
    
  const getComponent = function(props = {}) {
    return <Input { ...props } />;
  };

  beforeEach(function() {
    onBlurCallback = jest.fn();
    onFocusCallback = jest.fn();
  });

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
        'className': 'banana',
        'placeholder': 'Gscheider placeholder!',
        'type': 'password',
        'onBlur': onBlurCallback,
        'onFocus': onFocusCallback
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('a-input banana')).toBe(true);
    });

    it('should include a input field with all props', function() {
      const inputField = component.find('input');
      const labelProps = inputField.props();

      expect(labelProps).toEqual({
        'className': 'a-input__field',
        'placeholder': 'Gscheider placeholder!',
        'type': 'password',
        'onBlur': onBlurCallback,
        'onFocus': onFocusCallback
      });

      expect(inputField.node.ref).toBe('inputField');
    });
  });

  xdescribe('when initialized with autofocus', function() {

    it('should focus the input field', function() {
      // how!?
    });
  });
});
