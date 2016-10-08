import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.jsx';
import { mapStateToProps, mapDispatchToProps } from './headerContainer';
import { toggleMainMenu } from './headerActions';
import header from './headerReducers';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';

describe('<Header />', function() {

    describe('component', function() {

        let component,
            callback,
            getComponent = function(props = {}) {
                return <Header { ...props } />;
            };

        beforeEach(function() {
            callback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    onMainMenuClick: callback,
                    menuMainOpen: false
                }));
            });

            it('have the correct class', function() {
                expect(component.find('header').hasClass('o-header o-header--primary')).toBe(true);
            });

            it('include links', function() {
                expect(component.containsMatchingElement(
                    <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home" icon="heart" />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Link className="o-header__logo o-header__logo--large a-link--light" href="/" title="Home" />
                )).toBe(true);
            });

            it('include icons', function() {
                expect(component.containsMatchingElement(
                    <Icon icon="menu" className="o-header__icon o-header__menu-main-icon a-icon--light" label="Menu" onClick={ callback } />
                )).toBe(true);
                
                expect(component.containsMatchingElement(
                    <Icon icon="edit" className="o-header__icon a-icon--light" />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Icon icon="add" className="o-header__icon a-icon--light" />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Icon icon="dashboard" className="o-header__icon a-icon--light" />
                )).toBe(true);
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    menuMainOpen: true,
                    onMainMenuClick: callback
                }));
            });

            it('should include the MenuMain with the correct class', function() {
                const mainMenuProps = component.find('MenuMain').props();

                expect(mainMenuProps.className).toBe('m-menu-main--open');
            });
        });

        describe('when rendered closed', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    menuMainOpen: false,
                    onMainMenuClick: callback
                }));
            });

            it('should include the MenuMain with the correct class', function() {
                const mainMenuProps = component.find('MenuMain').props();

                expect(mainMenuProps.className).toBe('');
            });
        });
    });

    describe('container', function() {
        
        const state = {
                header: {
                    menuMainOpen: 'banana'
                }
            },
            dispatch = jest.fn();

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state.header);
        });

        it('should map dispatch actions to props', function() {
            mapDispatchToProps(dispatch).onMainMenuClick();
            
            expect(typeof mapDispatchToProps(dispatch).onMainMenuClick).toBe('function');
            expect(dispatch).toHaveBeenCalledWith(toggleMainMenu());
        });
    });

    describe('actions', function() {

        describe('toggleMainMenu()', function() {

            it('should return the action', function() {
                let action = toggleMainMenu();

                expect(action).toEqual({
                    type: 'TOGGLE_MAIN_MENU'
                });
            });
        });
    });

    describe('reducers', function() {

        describe('called with no valid action', function() {

            it('should return the initial state', function() {
                let state;

                expect(header(state, {})).toEqual({});
            });
        });

        describe('called with an action', function() {

            it('TOGGLE_MAIN_MENU: should return the new state', function() {
                let state = {menuMainOpen: true};

                // ...and not mutate it
                expect(header(state, toggleMainMenu())).not.toBe(state);

                expect(header({menuMainOpen: true}, toggleMainMenu())).toEqual({
                    menuMainOpen: false
                });

                expect(header({menuMainOpen: false}, toggleMainMenu())).toEqual({
                    menuMainOpen: true
                });
            });
        });
    });
});