import React from 'react';
import { shallow } from 'enzyme';

import MenuMain from './MenuMain.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';

describe('<MenuMain />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <MenuMain { ...props } />;
    };

    describe('when initialized without optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({}));
        });

        it('should include the icons and class', function() {
            expect(component.contains(
                <ul className="m-menu-main ">
                    <Icon className="m-menu-main__item" icon="about" label="About" />
                    <Icon className="m-menu-main__item" icon="help" label="Help" />
                    <Icon className="m-menu-main__item" icon="next" label="Next" />
                </ul>
            )).toBe(true);
        });
    });

    describe('when initialized with optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'className': 'banana'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('ul').hasClass('m-menu-main banana')).toBe(true);
        });
    });
});
