/* eslint-disable max-lines */
import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.jsx';
import { mapStateToProps, mapDispatchToProps } from './headerContainer';
import { toggleMainMenu, closeMainMenu, toggleDashboards, closeDashboards } from './headerActions';
import { toggleSidebar, closeSidebar } from '../sidebar/sidebarActions';
import header from './headerReducers';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';
import Button from '../../01_atoms/button/Button.jsx';

describe('<Header />', function() {

    describe('presentational component', function() {

        let component,
            onMenuMainClickCallback,
            onSidebarClickCallback,
            onHeaderClickCallback,
            onDashboardsClickCallback;
        
        const getComponent = function(props = {}) {
            return <Header { ...props } />;
        };

        beforeEach(function() {
            onMenuMainClickCallback = jest.fn();
            onHeaderClickCallback = jest.fn();
            onSidebarClickCallback = jest.fn();
            onDashboardsClickCallback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': false,
                    'dashboardsOpen': false,
                    'sidebarOpen': false,
                    'color': 0,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback,
                    'onSidebarClick': onSidebarClickCallback,
                    'onDashboardsClick': onDashboardsClickCallback
                }));
            });

            it('have the correct class', function() {
                expect(component.find('header').hasClass('o-header o-header--color-0')).toBe(true);
                expect(component.find('header').hasClass('o-header--sticky')).toBe(true);
            });

            it('have a click callback', function() {
                expect(component.find('header').props().onClick).toBe(onHeaderClickCallback);
            });

            it('include links', function() {
                expect(component.containsMatchingElement(
                    <Link className="o-header__logo o-header__logo--small a-link--light" href="/" title="Home">
                        <Icon icon="heart" />
                    </Link>
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
                    <Icon icon="customize" className="a-icon--light" title="Customize booky" stopPropagation={ true } onClick={ onSidebarClickCallback } />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Icon 
                        icon="dashboard" 
                        className="o-header__dashboards a-icon--light" 
                        title="Dashboards" 
                        stopPropagation={ true } 
                        onClick={ onDashboardsClickCallback } 
                    />
                )).toBe(true);
            });

            it('include a button', function() {
                expect(component.containsMatchingElement(
                    <Button className="o-header__sign-out a-button--light" size="small" color="light" text="Sign" buzzword="Out" />
                )).toBe(true);
            });
        });

        describe('when rendered with open main menu and closed sidebar', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': true,
                    'sidebarOpen': false,
                    'dashboardsOpen': false,
                    'color': 0,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback,
                    'onSidebarClick': onSidebarClickCallback,
                    'onDashboardsClick': onDashboardsClickCallback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--overlay-menu-main')).toBe(true);
                expect(component.find('header').hasClass('o-header--overlay-sidebar')).toBe(false);
            });

            it('should include the MenuMain with the correct props', function() {
                const mainMenuProps = component.find('MenuMain').props();

                expect(mainMenuProps.menuMainOpen).toBe(true);
                expect(typeof mainMenuProps.document).toBe('object');
            });
        });

        describe('when rendered closed main menu and open sidebar', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': false,
                    'sidebarOpen': true,
                    'dashboardsOpen': false,
                    'color': 0,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback,
                    'onSidebarClick': onSidebarClickCallback,
                    'onDashboardsClick': onDashboardsClickCallback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--overlay-menu-main')).toBe(false);
                expect(component.find('header').hasClass('o-header--overlay-sidebar')).toBe(true);
            });

            it('should include the MenuMain with the correct props', function() {
                const mainMenuProps = component.find('MenuMain').props();

                expect(mainMenuProps.menuMainOpen).toBe(false);
                expect(typeof mainMenuProps.document).toBe('object');
            });
        });

        describe('when rendered with optional parameters', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': false,
                    'sidebarOpen': true,
                    'dashboardsOpen': true,
                    'color': 1,
                    'sticky': false,
                    'onMenuMainClick': onMenuMainClickCallback,
                    'onHeaderClick': onHeaderClickCallback,
                    'onSidebarClick': onSidebarClickCallback,
                    'onDashboardsClick': onDashboardsClickCallback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--sticky')).toBe(false);
                expect(component.find('header').hasClass('o-header--color-1')).toBe(true);
                expect(component.find('header').hasClass('o-header--overlay-dashboards')).toBe(true);
            });
        });
    });

    describe('container component', function() {
        
        const state = {
                'header': {
                    'menuMainOpen': 'menuMainOpen',
                    'sidebarOpen': 'open',
                    'sticky': 'stickyHeader',
                    'color': 'headerColor',
                    'dashboardsOpen': 'dashboardsOpen'
                },
                'sidebar': {
                    'headerColor': 'headerColor',
                    'open': 'open',
                    'stickyHeader': 'stickyHeader'
                }
            },
            dispatch = jest.fn();

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state.header);
        });

        describe('should map dispatch actions to props', function() {

            it('onMenuMainClick()', function() {
                mapDispatchToProps(dispatch).onMenuMainClick();
                
                expect(typeof mapDispatchToProps(dispatch).onMenuMainClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleMainMenu());
                expect(dispatch).toHaveBeenCalledWith(closeSidebar());
                expect(dispatch).toHaveBeenCalledWith(closeDashboards());
            });

            it('onSidebarClick()', function() {
                mapDispatchToProps(dispatch).onSidebarClick();
            
                expect(typeof mapDispatchToProps(dispatch).onSidebarClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleSidebar());
                expect(dispatch).toHaveBeenCalledWith(closeMainMenu());
                expect(dispatch).toHaveBeenCalledWith(closeDashboards());
            });

            it('onDashboardsClick()', function() {
                mapDispatchToProps(dispatch).onDashboardsClick();
            
                expect(typeof mapDispatchToProps(dispatch).onDashboardsClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleDashboards());
                expect(dispatch).toHaveBeenCalledWith(closeMainMenu());
                expect(dispatch).toHaveBeenCalledWith(closeSidebar());
            });

            it('onHeaderClick()', function() {
                mapDispatchToProps(dispatch).onHeaderClick();
            
                expect(typeof mapDispatchToProps(dispatch).onHeaderClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(closeMainMenu());
                expect(dispatch).toHaveBeenCalledWith(closeSidebar());
                expect(dispatch).toHaveBeenCalledWith(closeDashboards());
            });
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

        describe('toggleDashboards()', function() {

            it('should return the action', function() {
                const action = toggleDashboards();

                expect(action).toEqual({
                    'type': 'TOGGLE_DASHBOARDS'
                });
            });
        });

        describe('closeDashboards()', function() {

            it('should return the action', function() {
                const action = closeDashboards();

                expect(action).toEqual({
                    'type': 'CLOSE_DASHBOARDS'
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
                const state = {'menuMainOpen': true};

                // ...and not mutate it
                expect(header(state, toggleMainMenu())).not.toBe(state);

                expect(header({'menuMainOpen': true}, toggleMainMenu())).toEqual({
                    'menuMainOpen': false
                });

                expect(header({'menuMainOpen': false}, toggleMainMenu())).toEqual({
                    'menuMainOpen': true
                });
            });

            it('CLOSE_MAIN_MENU: should return the new state', function() {
                const state = {'menuMainOpen': true};

                // ...and not mutate it
                expect(header(state, closeMainMenu())).not.toBe(state);

                expect(header({'menuMainOpen': true}, closeMainMenu())).toEqual({
                    'menuMainOpen': false
                });
            });

            it('TOGGLE_DASHBOARDS: should return the new state', function() {
                const state = {'dashboardsOpen': true};

                // ...and not mutate it
                expect(header(state, toggleDashboards())).not.toBe(state);

                expect(header({'dashboardsOpen': true}, toggleDashboards())).toEqual({
                    'dashboardsOpen': false
                });

                expect(header({'dashboardsOpen': false}, toggleDashboards())).toEqual({
                    'dashboardsOpen': true
                });
            });

            it('CLOSE_DASHBOARDS: should return the new state', function() {
                const state = {'dashboardsOpen': true};

                // ...and not mutate it
                expect(header(state, closeDashboards())).not.toBe(state);

                expect(header({'dashboardsOpen': true}, closeDashboards())).toEqual({
                    'dashboardsOpen': false
                });
            });
        });
    });
});

/* eslint-enable max-lines */
