import React from 'react';
import { shallow } from 'enzyme';

import ColorPicker from './ColorPicker';

xdescribe('<ColorPicker />', function() {

  let component,
    onColorChangeCallback;
    
  const getComponent = function(props = {}) {
    return <ColorPicker { ...props } />;
  };

  beforeEach(function() {
    onColorChangeCallback = jest.fn();
  });

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'activeColor': 0,
        'onColorChange': onColorChangeCallback
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('m-color-picker ')).toBe(true);
    });

    it('should include all the colors', function() {
      expect(component.containsMatchingElement(
        <span key={ 0 } className={ 'm-color-picker__color m-color-picker__color--0 m-color-picker__color--active' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 1 } className={ 'm-color-picker__color m-color-picker__color--1 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 2 } className={ 'm-color-picker__color m-color-picker__color--2 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 3 } className={ 'm-color-picker__color m-color-picker__color--3 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 4 } className={ 'm-color-picker__color m-color-picker__color--4 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 5 } className={ 'm-color-picker__color m-color-picker__color--5 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 6 } className={ 'm-color-picker__color m-color-picker__color--6 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 7 } className={ 'm-color-picker__color m-color-picker__color--7 ' } />
      )).toBe(true);
      expect(component.containsMatchingElement(
        <span key={ 8 } className={ 'm-color-picker__color m-color-picker__color--8 ' } />
      )).toBe(true);
    });

    it('should return the new color on click', function() {
      const newColor = 0;

      component.find('span').first().props().onClick(newColor);

      expect(onColorChangeCallback).toHaveBeenCalledWith(newColor);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'activeColor': 1,
        'className': 'banana',
        'onColorChange': onColorChangeCallback
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('m-color-picker banana')).toBe(true);
    });

    it('should select the active color', function() {
      expect(component.containsMatchingElement(
        <span key={ 0 } className={ 'm-color-picker__color m-color-picker__color--0 m-color-picker__color--active' } />
      )).toBe(false);

      expect(component.containsMatchingElement(
        <span key={ 1 } className={ 'm-color-picker__color m-color-picker__color--1 m-color-picker__color--active' } />
      )).toBe(true);
    });
  });
});
