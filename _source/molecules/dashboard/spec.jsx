import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './component.jsx';

describe('<Dashboard />', function() {

  describe('presentational component', function() {

    let component;
    
    const getComponent = function(props = {}) {
      return <Dashboard { ...props } />;
    };

    describe('when initialized with optional parameters', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'className': 'banana'
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').hasClass('a-dashboard banana')).toBe(true);
      });
    });
  });
});
