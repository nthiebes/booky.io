import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar.jsx';
import { mapStateToProps, mapDispatchToProps } from './toolbarContainer';
import { toggleSearch, toggleEditMode } from './toolbarActions';
import toolbar from './toolbarReducers';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

describe('<Toolbar />', function() {

    describe('presentational component', function() {

        let component,
            onEditModeClickCallback,
            onSearchClickCallback;

        const getComponent = function(props = {}) {
            return <Toolbar { ...props } />;
        };

        beforeEach(function() {
            onEditModeClickCallback = jest.fn();
            onSearchClickCallback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'onSearchClick': onSearchClickCallback,
                    'onEditModeClick': onEditModeClickCallback,
                    'searchOpen': false,
                    'editMode': false
                }));
            });

            it('have the correct class', function() {
                expect(component.find('div').hasClass('o-toolbar o-toolbar--sticky ')).toBe(true);
            });

            it('include the category icon', function() {
                expect(component.contains(
                    <Icon icon="add-category" className="o-toolbar__icon o-toolbar__icon--add-category a-icon--dark" title="New category" />
                ));
            });

            it('include a button for new categories', function() {
                expect(component.contains(
                    <Button className="o-toolbar__button a-button--primary" size="small" color="primary" text="New" buzzword="Category" />
                ));
            });
        });

        describe('when rendered open and with optional props', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'onSearchClick': onSearchClickCallback,
                    'onEditModeClick': onEditModeClickCallback,
                    'searchOpen': true,
                    'editMode': false,
                    'sticky': false,
                    'searchFocused': true
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('o-toolbar--open')).toBe(true);
                expect(component.find('div').hasClass('o-toolbar--sticky')).toBe(false);
            });

            it('should include a search bar', function() {
                const searchProps = component.find('Search').props();

                expect(searchProps.className).toBe('m-search--open');
                expect(searchProps.focus).toBe(true);
            });

            it('include the correct icon', function() {
                expect(component.contains(
                    <Icon 
                        icon={ 'search' } 
                        className="o-toolbar__icon o-toolbar__icon--search a-icon--dark" 
                        onClick={ onSearchClickCallback } 
                        title={ 'Search' } 
                    />
                ));
            });
        });

        describe('when rendered closed', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'onSearchClick': onSearchClickCallback,
                    'onEditModeClick': onEditModeClickCallback,
                    'searchOpen': false,
                    'editMode': false,
                    'sticky': false
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('o-toolbar--open')).toBe(false);
            });

            it('should include a search bar', function() {
                const searchProps = component.find('Search').props();

                expect(searchProps.className).toBe('');
                expect(searchProps.focus).toBe(false);
            });

            it('include the correct icon', function() {
                expect(component.contains(
                    <Icon 
                        icon={ 'close' } 
                        className="o-toolbar__icon o-toolbar__icon--search a-icon--dark" 
                        onClick={ onSearchClickCallback } 
                        title={ 'Close' } 
                    />
                ));
            });
        });

        describe('when edit mode is enabled', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'onSearchClick': onSearchClickCallback,
                    'onEditModeClick': onEditModeClickCallback,
                    'searchOpen': true,
                    'editMode': true,
                    'sticky': false
                }));
            });

            it('should include the correct icon', function() {
                expect(component.contains(
                    <Icon icon={ 'edit' } className="o-toolbar__icon a-icon--dark" title={ 'Edit mode' } onClick={ onEditModeClickCallback } />
                ));
            });
        });

        describe('when edit mode is disabled', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'onSearchClick': onSearchClickCallback,
                    'onEditModeClick': onEditModeClickCallback,
                    'searchOpen': true,
                    'editMode': false,
                    'sticky': false
                }));
            });

            it('should include the correct icon', function() {
                expect(component.contains(
                    <Icon icon={ 'view' } className="o-toolbar__icon a-icon--dark" title={ 'View mode' } onClick={ onEditModeClickCallback } />
                ));
            });
        });
    });

    describe('container component', function() {

        const state = {
                'toolbar': {
                    'searchOpen': 'searchOpen',
                    'editMode': 'editMode',
                    'sticky': 'stickyToolbar',
                    'searchFocused': 'searchFocused'
                },
                'sidebar': {
                    'stickyToolbar': 'stickyToolbar'
                }
            },
            dispatch = jest.fn();

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state.toolbar);
        });

        it('should map dispatch actions to props', function() {
            mapDispatchToProps(dispatch).onSearchClick();

            expect(typeof mapDispatchToProps(dispatch).onSearchClick).toBe('function');
            expect(dispatch).toHaveBeenCalledWith(toggleSearch());

            mapDispatchToProps(dispatch).onEditModeClick();

            expect(typeof mapDispatchToProps(dispatch).onEditModeClick).toBe('function');
            expect(dispatch).toHaveBeenCalledWith(toggleEditMode());
        });
    });

    describe('actions', function() {

        describe('toggleSearch()', function() {

            it('should return the action', function() {
                const action = toggleSearch();

                expect(action).toEqual({
                    'type': 'TOGGLE_SEARCH'
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

                expect(toolbar(state, {})).toEqual({});
            });
        });

        describe('called with an action', function() {

            it('TOGGLE_SEARCH: should return the new state', function() {
                const state = {
                    'searchOpen': true,
                    'searchFocused': true
                };

                // ...and not mutate it
                expect(toolbar(state, toggleSearch())).not.toBe(state);

                expect(toolbar({'searchOpen': true}, toggleSearch())).toEqual({
                    'searchOpen': false,
                    'searchFocused': false
                });

                expect(toolbar({'searchOpen': false}, toggleSearch())).toEqual({
                    'searchOpen': true,
                    'searchFocused': true
                });
            });

            it('TOGGLE_EDIT_MODE: should return the new state', function() {
                const state = {'editMode': true};

                // ...and not mutate it
                expect(toolbar(state, toggleEditMode())).not.toBe(state);

                expect(toolbar({'editMode': true}, toggleEditMode())).toEqual({
                    'editMode': false,
                    'searchFocused': false
                });

                expect(toolbar({'editMode': false}, toggleEditMode())).toEqual({
                    'editMode': true,
                    'searchFocused': false
                });
            });
        });
    });
});
