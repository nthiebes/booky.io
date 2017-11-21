import React from 'react';
import { shallow } from 'enzyme';

import Bookmark from './component.jsx';
import Icon from '../../atoms/icon';

xdescribe('<Bookmark />', function() {

  let component;
    
  const getComponent = function(props = {}) {
    return <Bookmark { ...props } />;
  };

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'name': 'Banana',
        'url': 'https://potato.com'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('li').hasClass('m-bookmark')).toBe(true);
    });

    it('should include the link', function() {
      const props = component.find('a').props();

      expect(props.href).toBe('https://potato.com');
      expect(props.target).toBe('_blank');
      expect(props.className).toBe('m-bookmark__link');
      expect(component.find('a').text()).toBe('Banana');
    });

    it('should include the icons', function() {
      expect(component.contains(
        <Icon className="m-bookmark__icon m-bookmark__icon--edit-mode a-icon--dark" icon="edit" title="Edit bookmark" />
      )).toBe(true);
      expect(component.contains(
        <Icon className="m-bookmark__icon m-bookmark__icon--edit-mode a-icon--dark" icon="delete" title="Delete bookmark" />
      )).toBe(true);
      expect(component.contains(
        <Icon className="m-bookmark__icon m-bookmark__icon--edit-mode a-icon--dark m-bookmark__icon--drag" icon="drag" title="Drag bookmark" />
      )).toBe(true);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'name': 'Banana',
        'url': 'https://potato.com',
        'target': 'apple'
      }));
    });

    it('should have the correct target attribute', function() {
      expect(component.find('a').props().target).toBe('apple');
    });
  });
});
