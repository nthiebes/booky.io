import React from 'react';
import { shallow, mount } from 'enzyme';

import MenuMain from './MenuMain.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';

describe('<MenuMain />', function() {

    let component,
        documentMock;
        
    const getComponent = function(props = {}) {
        return <MenuMain { ...props } />;
    };

    beforeEach(function() {
        documentMock = {
            'body': {
                'classList': {
                    'toggle': jest.fn()
                }
            }
        };
    });

    describe('when initialized without optional parameters and open', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'menuMainOpen': true,
                'document': documentMock
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('ul').hasClass('m-menu-main m-menu-main--open ')).toBe(true);
        });

        it('should prevent the event propagation on click', function() {
            const eventMock = {
                'stopPropagation': jest.fn()
            };

            component.find('ul').props().onClick(eventMock);
            expect(eventMock.stopPropagation).toHaveBeenCalled();
        });

        it('should update the body class', function() {
            component = mount(getComponent({
                'menuMainOpen': true,
                'document': documentMock
            }));

            component.update();
            expect(documentMock.body.classList.toggle).toHaveBeenCalledWith('booky--no-scrolling-mobile-tablet', true);
        });

        it('should include the icons', function() {

            /* eslint-disable react/jsx-key */
            expect(component.contains([
                <Icon className="m-menu-main__item" icon="about" label="About" />,
                <Icon className="m-menu-main__item" icon="help" label="Help" />,
                <Icon className="m-menu-main__item" icon="account" label="Account" />,
                <Icon className="m-menu-main__item" icon="next" label="Next" />,
                <Icon className="m-menu-main__item m-menu-main__sign-out" icon="sign-out" label="Sign Out" />
            ])).toBe(true);
            
            /* eslint-enable react/jsx-key */
        });
    });

    describe('when initialized with optional parameters and closed', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'menuMainOpen': false,
                'document': documentMock,
                'className': 'banana'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('ul').hasClass('m-menu-main banana')).toBe(true);
        });
    });
});
