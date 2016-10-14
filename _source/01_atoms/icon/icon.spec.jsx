import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon.jsx';

describe('<Icon />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <Icon { ...props } />;
    };

    describe('when initialized without optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'icon': 'gscheid'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('div').hasClass('a-icon')).toBe(true);
        });

        it('should include the svg', function() {
            expect(component.contains(
                <svg className="a-icon__svg">
                    <use xlinkHref={ 'images/symbol-defs.svg#icon-gscheid' } />
                </svg>
            )).toBe(true);
        });
    });

    describe('when initialized with optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'icon': 'gscheid',
                'className': 'banana',
                'label': 'Gscheides label!'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('div').hasClass('a-icon banana')).toBe(true);
        });

        it('should include a label', function() {
            const labelProps = component.find('label').props();

            expect(labelProps).toEqual({
                'className': 'a-icon__label',
                'children': 'Gscheides label!'
            });
        });
    });
});
