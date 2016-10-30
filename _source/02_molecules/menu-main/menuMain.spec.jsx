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

        it('should have the correct class', function() {
            expect(component.find('ul').hasClass('m-menu-main m-menu-main--open ')).toBe(true);
        });

        it('should prevent the event propagation on click', function() {
            // how!?
        });

        it('should update the body class', function() {
            // how!?
        });

        it('should include the icons', function() {
            expect(component.contains(
                <Icon className="m-menu-main__item" icon="about" label="About" />
            )).toBe(true);
            expect(component.contains(
                <Icon className="m-menu-main__item" icon="help" label="Help" />
            )).toBe(true);
            expect(component.contains(
                <Icon className="m-menu-main__item" icon="account" label="Account" />
            )).toBe(true);
            expect(component.contains(
                <Icon className="m-menu-main__item" icon="next" label="Next" />
            )).toBe(true);
            expect(component.contains(
                <Icon className="m-menu-main__item m-menu-main__sign-out" icon="sign-out" label="Sign Out" />
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
