import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.jsx';
import { mapStateToProps, mapDispatchToProps } from './headerContainer';
import { toggleMainMenu, toggleEditMode } from './headerActions';
import header from './headerReducers';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Link from '../../01_atoms/link/Link.jsx';

describe('<Header />', function() {

    describe('presentational component', function() {

        let component,
            callback;
        
        const getComponent = function(props = {}) {
            return <Header { ...props } />;
        };

        beforeEach(function() {
            callback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': false,
                    'editMode': false,
                    'onMainMenuClick': callback,
                    'onEditModeClick': callback
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
                    <Icon icon="edit" className="o-header__icon a-icon--light" title="Edit mode" />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Icon icon="add" className="o-header__icon o-header__icon--add a-icon--light" title="Add" />
                )).toBe(true);

                expect(component.containsMatchingElement(
                    <Icon icon="dashboard" className="o-header__icon a-icon--light" title="Dashboards" />
                )).toBe(true);
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'menuMainOpen': true,
                    'editMode': false,
                    'onMainMenuClick': callback,
                    'onEditModeClick': callback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--main-menu-open')).toBe(true);
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
                    'editMode': false,
                    'onMainMenuClick': callback,
                    'onEditModeClick': callback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('header').hasClass('o-header--main-menu-open')).toBe(false);
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
                    'editMode': 'potato'
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

            mapDispatchToProps(dispatch).onEditModeClick();
            
            expect(typeof mapDispatchToProps(dispatch).onEditModeClick).toBe('function');
            expect(dispatch).toHaveBeenCalledWith(toggleEditMode());
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

        describe('toggleEditMode()', function() {

            it('should return the action', function() {
                const action = toggleEditMode();

                expect(action).toEqual({
                    'type': 'TOGGLE_EDIT_MODE'
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

            it('TOGGLE_EDIT_MODE: should return the new state', function() {
                const state = {'editMode': true};

                // ...and not mutate it
                expect(header(state, toggleEditMode())).not.toBe(state);

                expect(header({'editMode': true}, toggleEditMode())).toEqual({
                    'editMode': false
                });

                expect(header({'editMode': false}, toggleEditMode())).toEqual({
                    'editMode': true
                });
            });
        });
    });
});
