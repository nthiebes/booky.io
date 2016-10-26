import React from 'react';
import { shallow } from 'enzyme';

import MenuMain from './MenuMain.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';

describe('<MenuMain />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <MenuMain { ...props } />;
    };

    describe('when initialized without optional parameters and open', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'menuMainOpen': true
            }));
        });

        it('should include the icons and class', function() {
            expect(component.contains(
                <ul className="m-menu-main m-menu-main--open ">
                    <Icon className="m-menu-main__item" icon="about" label="About" />
                    <Icon className="m-menu-main__item" icon="help" label="Help" />
                    <Icon className="m-menu-main__item" icon="next" label="Account" />
                    <Icon className="m-menu-main__item" icon="next" label="Next" />
                    <Icon className="m-menu-main__item" icon="next" label="Customize" />
                    <Icon className="m-menu-main__item" icon="next" label="Sign Out" />
                </ul>
            )).toBe(true);
        });
    });

    describe('when initialized with optional parameters and closed', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'menuMainOpen': false,
                'className': 'banana'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('ul').hasClass('m-menu-main banana')).toBe(true);
        });
    });
});
