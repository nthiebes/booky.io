import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

xdescribe('<Button />', function() {

  let component,
    onButtonClickCallback;
    
  const getComponent = function(props = {}) {
    return <Button { ...props } />;
  };

  beforeEach(function() {
    onButtonClickCallback = jest.fn();
  });

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'text': 'Troll',
        'size': 'small',
        'color': 'primary',
        'onButtonClick': onButtonClickCallback
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('a-button a-button--small a-button--small-primary')).toBe(true);
    });

    it('should include the text', function() {
      expect(component.contains(
        <span className="a-button__text">{ 'Troll' }</span>
      )).toBe(true);
    });

    it('should include a click callback', function() {
      expect(component.find('div').props().onClick).toBe(onButtonClickCallback);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'className': 'banana',
        'text': 'Face',
        'size': 'large',
        'color': 'light',
        'buzzword': 'Troll',
        'icon': 'category',
        'onButtonClick': onButtonClickCallback
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('a-button a-button--large a-button--large-light banana')).toBe(true);
    });

    it('should include the text', function() {
      expect(component.contains(
        <span className="a-button__text">{ 'Face' }</span>
      )).toBe(true);
    });

    it('should include the buzzword', function() {
      expect(component.contains(
        <span className="a-button__text a-button__text--buzzword">{ 'Troll' }</span>
      )).toBe(true);
    });

    it('should include the icon', function() {
      const iconProps = component.find('Icon').props();

      expect(iconProps.className).toBe('a-button__icon');
      expect(iconProps.icon).toBe('category');
    });
  });
});
