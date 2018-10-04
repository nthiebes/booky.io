import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

xdescribe('<Icon />', function() {

  let component,
    onClickCallback;
    
  const getComponent = function(props = {}) {
    return <Icon { ...props } />;
  };

  beforeEach(function() {
    onClickCallback = jest.fn();
  });

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'icon': 'gscheid'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('a-icon')).toBe(true);
    });

    it('should include the svg', function() {
      expect(component.contains(
        <svg className="a-icon__svg">
          <use xlinkHref={ 'images/symbol-defs.svg#icon-gscheid' } />
        </svg>
      )).toBe(true);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'icon': 'gscheid',
        'className': 'banana',
        'label': 'Gscheides label!',
        'title': 'Moin!',
        'onClick': onClickCallback
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('a-icon banana')).toBe(true);
    });

    it('should have a title', function() {
      expect(component.find('div').prop('title')).toBe('Moin!');
    });

    it('should include a label', function() {
      const labelProps = component.find('label').props();

      expect(labelProps).toEqual({
        'className': 'a-icon__label',
        'children': 'Gscheides label!'
      });
    });

    it('should include a click callback', function() {
      component.find('div').props().onClick();
      expect(onClickCallback).toHaveBeenCalled();
    });
  });

  describe('when event propagation needs to be prevented', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'icon': 'gscheid',
        'stopPropagation': true,
        'onClick': onClickCallback
      }));
    });

    it('should prevent it', function() {
      const eventMock = {
        'stopPropagation': jest.fn()
      };

      component.find('div').props().onClick(eventMock);
      expect(onClickCallback).toHaveBeenCalled();
      expect(eventMock.stopPropagation).toHaveBeenCalled();
    });
  });
});
