import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './component.jsx';

xdescribe('<Checkbox />', function() {

  describe('presentational component', function() {

    let component,
      onCheckboxClickCallback;
    
    const getComponent = function(props = {}) {
      return <Checkbox { ...props } />;
    };

    beforeEach(function() {
      onCheckboxClickCallback = jest.fn();
    });

    describe('when initialized without optional parameters and checked', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'checked': true,
          'onCheckboxClick': onCheckboxClickCallback
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').hasClass('a-checkbox ')).toBe(true);
      });

      it('include a click callback', function() {
        expect(component.find('div').props().onClick).toBe(onCheckboxClickCallback);
      });

      it('include the correct markup', function() {
        expect(component.contains(
          <span className="a-checkbox__box">
            <svg className={ 'a-checkbox__icon a-checkbox__icon--checked' }>
              <use xlinkHref="images/symbol-defs.svg#icon-check" />
            </svg>
          </span>,
          <label className="a-checkbox__label">{ '' }</label>
        )).toBe(true);
      });
    });

    describe('when initialized with optional parameters and not checked', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'checked': false,
          'onCheckboxClick': onCheckboxClickCallback,
          'className': 'banana',
          'label': 'Weihnachtsmann'
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').hasClass('a-checkbox banana')).toBe(true);
      });

      it('include the correct markup', function() {
        expect(component.contains(
          <span className="a-checkbox__box">
            <svg className={ 'a-checkbox__icon' }>
              <use xlinkHref="images/symbol-defs.svg#icon-check" />
            </svg>
          </span>,
          <label className="a-checkbox__label">{ 'Weihnachtsmann' }</label>
        )).toBe(true);
      });
    });
  });
});
