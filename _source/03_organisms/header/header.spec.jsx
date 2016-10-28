import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.jsx';
import { mapStateToProps, mapDispatchToProps } from './headerContainer';
import { toggleMainMenu, closeMainMenu } from './headerActions';
import headerReducers from './headerReducers';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';
import Button from '../../01_atoms/button/Button.jsx';

describe('<Header />', function() {

    describe('presentational component', function() {

        let component,
            onMenuMainClickCallback,
            onHeaderClickCallback;
        
        const getComponent = function(props = {}) {
            return <Header { ...props } />;
        };

        beforeEach(function() {
            onMenuMainClickCallback = jest.fn();
            onHeaderClickCallback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': false,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback
                }));
            });

            it('have the correct class', function() {
                expect(component.find('header').hasClass('o-header o-header--primary o-header--sticky ')).toBe(true);
            });

            it('have a click callback', function() {
                expect(component.find('header').props().onClick).toBe(onHeaderClickCallback);
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
                    <Icon 
                        icon="menu" 
                        className="o-header__icon o-header__menu-main-icon a-icon--light" 
                        label="Menu" onClick={ onMenuMainClickCallback } 
                        stopPropagation={ true } 
                    />
                )).toBe(true);
                
                expect(component.containsMatchingElement(
                    <Icon icon="settings" className="a-icon--light" title="Customize booky" />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Icon icon="dashboard" className="o-header__dashboards a-icon--light" title="Dashboards" />
                )).toBe(true);
            });

            it('include a button', function() {
                expect(component.containsMatchingElement(
                    <Button className="o-header__sign-out a-button--light" size="small" color="light" text="Sign" buzzword="Out" />
                )).toBe(true);
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': true,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--menu-main-open')).toBe(true);
            });

            it('should include the MenuMain with the correct props', function() {
                const mainMenuProps = component.find('MenuMain').props();

                expect(mainMenuProps.menuMainOpen).toBe(true);
            });
        });

        describe('when rendered closed', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': false,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--menu-main-open')).toBe(false);
            });

            it('should include the MenuMain with the correct props', function() {
                const mainMenuProps = component.find('MenuMain').props();

                expect(mainMenuProps.menuMainOpen).toBe(false);
            });
        });
    });

    describe('container component', function() {
        
        const state = {
                'header': {
                    'menuMainOpen': 'banana',
                    'sticky': true,
                    'color': 'primary'
                }
            },
            dispatch = jest.fn();

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state.header);
        });

        it('should map dispatch actions to props', function() {
            mapDispatchToProps(dispatch).onMenuMainClick();
            
            expect(typeof mapDispatchToProps(dispatch).onMenuMainClick).toBe('function');
            expect(dispatch).toHaveBeenCalledWith(toggleMainMenu());

            mapDispatchToProps(dispatch).onHeaderClick();
            
            expect(typeof mapDispatchToProps(dispatch).onHeaderClick).toBe('function');
            expect(dispatch).toHaveBeenCalledWith(closeMainMenu());
        });
    });

    describe('actions', function() {

        describe('toggleMainMenu()', function() {

            it('should return the action', function() {
                const action = toggleMainMenu();

                expect(action).toEqual({
                    'type': 'TOGGLE_MAIN_MENU'
                });
            });
        });

        describe('closeMainMenu()', function() {

            it('should return the action', function() {
                const action = closeMainMenu();

                expect(action).toEqual({
                    'type': 'CLOSE_MAIN_MENU'
                });
            });
        });
    });

    describe('reducers', function() {

        describe('called with no valid action', function() {

            it('should return the initial state', function() {
                let state;

                expect(headerReducers(state, {})).toEqual({});
            });
        });

        describe('called with an action', function() {

            it('TOGGLE_MAIN_MENU: should return the new state', function() {
                const state = {'menuMainOpen': true};

                // ...and not mutate it
                expect(headerReducers(state, toggleMainMenu())).not.toBe(state);

                expect(headerReducers({'menuMainOpen': true}, toggleMainMenu())).toEqual({
                    'menuMainOpen': false
                });

                expect(headerReducers({'menuMainOpen': false}, toggleMainMenu())).toEqual({
                    'menuMainOpen': true
                });
            });

            it('CLOSE_MAIN_MENU: should return the new state', function() {
                const state = {'menuMainOpen': true};

                // ...and not mutate it
                expect(headerReducers(state, closeMainMenu())).not.toBe(state);

                expect(headerReducers({'menuMainOpen': true}, closeMainMenu())).toEqual({
                    'menuMainOpen': false
                });
            });
        });
    });
});
