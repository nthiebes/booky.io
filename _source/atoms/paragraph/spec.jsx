import React from 'react';
import { shallow } from 'enzyme';

import Paragraph from './Paragraph';

xdescribe('<Paragraph />', function() {

  let component;
    
  const getComponent = function(props = {}) {
    return <Paragraph { ...props } />;
  };

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'children': <div>{ 'Moin' }</div>
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('p').hasClass('a-paragraph')).toBe(true);
    });

    it('should include the child components', function() {
      expect(component.find('p').contains(<div>{ 'Moin' }</div>)).toBe(true);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'children': <div>{ 'Moin' }</div>,
        'className': 'banana'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('p').hasClass('a-paragraph banana')).toBe(true);
    });
  });
});
