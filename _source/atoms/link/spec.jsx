import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

xdescribe('<Link />', function() {

  let component;
    
  const getComponent = function(props = {}) {
    return <Link { ...props } />;
  };

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'href': 'link'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('Link').hasClass('a-link')).toBe(true);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'className': 'banana',
        'children': <span>{ 'children' }</span>,
        'title': 'Potato',
        'href': '/'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('IndexLink').hasClass('a-link banana')).toBe(true);
    });

    it('should include the children', function() {
      expect(component.contains(
        <span>{ 'children' }</span>
      )).toBe(true);
    });

    it('should have a title', function() {
      expect(component.find('IndexLink').prop('title')).toBe('Potato');
    });
  });
});
