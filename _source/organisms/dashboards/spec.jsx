import React from 'react';
import { shallow } from 'enzyme';

import Dashboards from './component.jsx';

xdescribe('<Dashboards />', function() {

  describe('presentational component', function() {

    let component;
    
    const getComponent = function(props = {}) {
      return <Dashboards { ...props } />;
    };

    describe('when initialized with optional parameters', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'className': 'banana'
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('aside').hasClass('o-dashboards banana')).toBe(true);
      });
    });
  });
});
