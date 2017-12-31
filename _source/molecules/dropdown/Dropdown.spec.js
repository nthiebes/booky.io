import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './Dropdown';

xdescribe('<Dropdown />', function() {

  describe('presentational component', function() {

    let component,
      options,
      onDropdownChangeCallback;
    
    const getComponent = function(props = {}) {
      return <Dropdown { ...props } />;
    };

    beforeEach(function() {
      onDropdownChangeCallback = jest.fn();

      options = [
        {
          'name': 'Banana'
        }, {
          'name': 'Potato'
        }, {
          'name': 'Apple'
        }
      ];
    });

    describe('when initialized without optional parameters', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'options': options,
          'onDropdownChange': onDropdownChangeCallback
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('select').hasClass('m-dropdown ')).toBe(true);
      });

      it('should include all the options', function() {
        expect(component.contains(
          <option className="m-dropdown__option" value={ 0 }>{ 'Banana' }</option>,
          <option className="m-dropdown__option" value={ 1 }>{ 'Potato' }</option>,
          <option className="m-dropdown__option" value={ 2 }>{ 'Apple' }</option>
        )).toBe(true);
      });

      it('should select the correct option', function() {
        const key = 0;

        expect(component.find('select').props().value).toBe(key);
      });

      it('should return the option on change', function() {
        const event = {
            'target': {
              'value': '1'
            }
          },
          newValue = 1;

        component.find('select').props().onChange(event);

        expect(onDropdownChangeCallback).toHaveBeenCalledWith(newValue);
      });
    });

    describe('when initialized with optional parameters', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'className': 'banana',
          'selectedKey': 2,
          'options': options,
          'onDropdownChange': onDropdownChangeCallback
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('select').hasClass('m-dropdown banana')).toBe(true);
      });

      it('should select the correct option', function() {
        const key = 2;

        expect(component.find('select').props().value).toBe(key);
      });
    });
  });
});
