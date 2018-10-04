import React from 'react';
import { shallow } from 'enzyme';

import Headline from './Headline';

xdescribe('<Headline />', function() {

  let component;
    
  const getComponent = function(props = {}) {
    return <Headline { ...props } />;
  };

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'type': 1,
        'text': 'Banana'
      }));
    });

    it('should have the correct tag and class', function() {
      expect(component.find('h1').hasClass('a-headline')).toBe(true);
    });

    it('should include the correct text', function() {
      expect(component.find('h1').text()).toBe('Banana');
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'type': 2,
        'text': 'moin',
        'className': 'banana'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('h2').hasClass('a-headline banana')).toBe(true);
    });
  });
});
