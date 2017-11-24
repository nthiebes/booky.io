import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';
import Input from '../../atoms/input';

xdescribe('<Search />', function() {

  let component;
    
  const getComponent = function(props = {}) {
    return <Search { ...props } />;
  };

  describe('when initialized without optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({}));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('m-search ')).toBe(true);
    });

    it('should include the input component', function() {
      expect(component.contains(
        <Input placeholder="Search booky..." focus={ false } />
      )).toBe(true);
    });
  });

  describe('when initialized with optional parameters', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'focus': true,
        'className': 'banana'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('div').hasClass('m-search banana')).toBe(true);
    });

    it('should include the input component', function() {
      expect(component.contains(
        <Input placeholder="Search booky..." focus={ true } />
      )).toBe(true);
    });
  });
});
