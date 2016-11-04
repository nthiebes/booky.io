import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox.jsx';

describe('<Checkbox />', function() {

    describe('presentational component', function() {

        let component;
        
        const getComponent = function(props = {}) {
            return <Checkbox { ...props } />;
        };

        describe('when initialized with optional parameters', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'className': 'banana'
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('a-checkbox banana')).toBe(true);
            });
        });
    });
});
