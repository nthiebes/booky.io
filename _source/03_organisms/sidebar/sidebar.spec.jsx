/* eslint-disable max-lines */
/* eslint-disable max-statements */
import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar.jsx';
import { mapStateToProps, mapDispatchToProps } from './sidebarContainer';
import {
    toggleSidebar,
    toggleNotes, 
    toggleAutofill, 
    toggleNewtab, 
    toggleStickyHeader, 
    toggleStickyToolbar, 
    updateGlobalColor, 
    updateHeaderColor, 
    closeSidebar,
    toggleMaxWidth,
    updateDashboardType
} from '../sidebar/sidebarActions';
import sidebar from './sidebarReducers';
import Button from '../../01_atoms/button/Button.jsx';
import Checkbox from '../../01_atoms/checkbox/Checkbox.jsx';
import ColorPicker from '../../02_molecules/color-picker/ColorPicker.jsx';
import Dropdown from '../../02_molecules/dropdown/Dropdown.jsx';

describe('<Sidebar />', function() {

    describe('presentational component', function() {

        let component,
            onAutofillClickCallback,
            onDoneClickCallback,
            onGlobalColorChangeCallback,
            onHeaderColorChangeCallback,
            onNewtabClickCallback,
            onNotesClickCallback,
            onStickyHeaderClickCallback,
            onStickyToolbarClickCallback,
            onMaxWidthClickCallback,
            onDashboardChangeCallback;
        
        const getComponent = function(props = {}) {
            return <Sidebar { ...props } />;
        };

        beforeEach(function() {
            onAutofillClickCallback = jest.fn();
            onDoneClickCallback = jest.fn();
            onGlobalColorChangeCallback = jest.fn();
            onHeaderColorChangeCallback = jest.fn();
            onNewtabClickCallback = jest.fn();
            onNotesClickCallback = jest.fn();
            onStickyHeaderClickCallback = jest.fn();
            onStickyToolbarClickCallback = jest.fn();
            onMaxWidthClickCallback = jest.fn();
            onDashboardChangeCallback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'open': false,
                    'autofill': true,
                    'newtab': true,
                    'notes': true,
                    'stickyHeader': true,
                    'stickyToolbar': true,
                    'globalColor': 0,
                    'headerColor': 1,
                    'maxWidth': true,
                    'dashboard': 2,
                    'onAutofillClick': onAutofillClickCallback,
                    'onDoneClick': onDoneClickCallback,
                    'onGlobalColorChange': onGlobalColorChangeCallback,
                    'onHeaderColorChange': onHeaderColorChangeCallback,
                    'onNewtabClick': onNewtabClickCallback,
                    'onNotesClick': onNotesClickCallback,
                    'onStickyHeaderClick': onStickyHeaderClickCallback,
                    'onStickyToolbarClick': onStickyToolbarClickCallback,
                    'onMaxWidthClick': onMaxWidthClickCallback,
                    'onDashboardChange': onDashboardChangeCallback
                }));
            });

            it('have the correct class', function() {
                expect(component.find('aside').hasClass('o-sidebar ')).toBe(true);
            });

            it('include all required elements', function() {
                const options = [{'name': 'Display as dropdown'}, {'name': 'Display as sidebar'}];

                expect(component.contains(
                    <h1 className="o-sidebar__heading">{ 'Customize booky' }</h1>,
                    <Button onButtonClick={ onDoneClickCallback } className="o-sidebar__button" text="Done" />,
                    <h2 className="o-sidebar__subheading">{ 'Global color scheme' }</h2>,
                    <ColorPicker onColorChange={ onGlobalColorChangeCallback } activeColor={ 0 } />,
                    <h2 className="o-sidebar__subheading">{ 'Header color' }</h2>,
                    <ColorPicker onColorChange={ onHeaderColorChangeCallback } activeColor={ 1 } />,
                    <h2 className="o-sidebar__subheading">{ 'Layout' }</h2>,
                    <Checkbox onCheckboxClick={ onStickyHeaderClickCallback } label={ 'Sticky header' } checked={ true } />,
                    <Checkbox onCheckboxClick= { onStickyToolbarClickCallback } label={ 'Sticky toolbar' } checked={ true } />,
                    <Checkbox label={ 'Maximum width (two columns)' } checked={ true } onCheckboxClick={ onMaxWidthClickCallback } />,
                    <h2 className="o-sidebar__subheading">{ 'Dashboards' }</h2>,
                    <Dropdown onDropdownChange={ onDashboardChangeCallback } options={ options } selectedKey={ 2 } />,
                    <p className="o-sidebar__note">{ '(smaller screens will always use a sidebar)' }</p>,
                    <h2 className="o-sidebar__subheading">{ 'Preferences' }</h2>,
                    <Checkbox onCheckboxClick={ onNotesClickCallback } label={ 'Bookmark notes' } checked={ true } />,
                    <Checkbox onCheckboxClick={ onAutofillClickCallback } label={ 'Autofill bookmark name' } checked={ true } />,
                    <Checkbox onCheckboxClick={ onNewtabClickCallback } label={ 'Open bookmarks in new tab' } checked={ true } />
                )).toBe(true);
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'open': true,
                    'autofill': true,
                    'newtab': true,
                    'notes': true,
                    'stickyHeader': false,
                    'stickyToolbar': true,
                    'globalColor': 0,
                    'headerColor': 1,
                    'maxWidth': true,
                    'dashboard': 2,
                    'onAutofillClick': onAutofillClickCallback,
                    'onDoneClick': onDoneClickCallback,
                    'onGlobalColorChange': onGlobalColorChangeCallback,
                    'onHeaderColorChange': onHeaderColorChangeCallback,
                    'onNewtabClick': onNewtabClickCallback,
                    'onNotesClick': onNotesClickCallback,
                    'onStickyHeaderClick': onStickyHeaderClickCallback,
                    'onStickyToolbarClick': onStickyToolbarClickCallback,
                    'onMaxWidthClick': onMaxWidthClickCallback,
                    'onDashboardChange': onDashboardChangeCallback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('aside').hasClass('o-sidebar o-sidebar--open')).toBe(true);
            });
        });
    });

    describe('container component', function() {
        
        const state = {
                'sidebar': {
                    'open': 'open',
                    'notes': 'notes',
                    'autofill': 'autofill',
                    'newtab': 'newtab',
                    'stickyHeader': 'stickyHeader',
                    'stickyToolbar': 'stickyToolbar',
                    'globalColor': 'globalColor',
                    'headerColor': 'headerColor',
                    'maxWidth': 'maxWidth',
                    'dashboard': 'dashboard'
                }
            },
            dispatch = jest.fn();

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state.sidebar);
        });

        describe('should map dispatch actions to props', function() {

            it('onNotesClick()', function() {
                mapDispatchToProps(dispatch).onNotesClick();
                
                expect(typeof mapDispatchToProps(dispatch).onNotesClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleNotes());
            });
            it('onAutofillClick()', function() {
                mapDispatchToProps(dispatch).onAutofillClick();
                
                expect(typeof mapDispatchToProps(dispatch).onAutofillClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleAutofill());
            });
            it('onNewtabClick()', function() {
                mapDispatchToProps(dispatch).onNewtabClick();
                
                expect(typeof mapDispatchToProps(dispatch).onNewtabClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleNewtab());
            });
            it('onStickyHeaderClick()', function() {
                mapDispatchToProps(dispatch).onStickyHeaderClick();
                
                expect(typeof mapDispatchToProps(dispatch).onStickyHeaderClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleStickyHeader());
            });
            it('onStickyToolbarClick()', function() {
                mapDispatchToProps(dispatch).onStickyToolbarClick();

                expect(typeof mapDispatchToProps(dispatch).onStickyToolbarClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleStickyToolbar());
            });
            it('onGlobalColorChange()', function() {
                mapDispatchToProps(dispatch).onGlobalColorChange('banana');
                
                expect(typeof mapDispatchToProps(dispatch).onGlobalColorChange).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(updateGlobalColor('banana'));
            });
            it('onHeaderColorChange()', function() {
                mapDispatchToProps(dispatch).onHeaderColorChange('banana');
                
                expect(typeof mapDispatchToProps(dispatch).onHeaderColorChange).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(updateHeaderColor('banana'));
            });
            it('onDoneClick()', function() {
                mapDispatchToProps(dispatch).onDoneClick();
                
                expect(typeof mapDispatchToProps(dispatch).onDoneClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(closeSidebar());
            });
            it('onMaxWidthClick()', function() {
                mapDispatchToProps(dispatch).onMaxWidthClick();
                
                expect(typeof mapDispatchToProps(dispatch).onMaxWidthClick).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(toggleMaxWidth());
            });
            it('onDashboardChange()', function() {
                mapDispatchToProps(dispatch).onDashboardChange('banana');
                
                expect(typeof mapDispatchToProps(dispatch).onDashboardChange).toBe('function');
                expect(dispatch).toHaveBeenCalledWith(updateDashboardType('banana'));
            });
        });
    });

    describe('actions', function() {

        describe('should return the action', function() {

            it('toggleSidebar()', function() {
                const action = toggleSidebar();

                expect(action).toEqual({
                    'type': 'TOGGLE_SIDEBAR'
                });
            });
            it('closeSidebar()', function() {
                const action = closeSidebar();

                expect(action).toEqual({
                    'type': 'CLOSE_SIDEBAR'
                });
            });
            it('toggleNotes()', function() {
                const action = toggleNotes();

                expect(action).toEqual({
                    'type': 'TOGGLE_NOTES'
                });
            });
            it('toggleAutofill()', function() {
                const action = toggleAutofill();

                expect(action).toEqual({
                    'type': 'TOGGLE_AUTOFILL'
                });
            });
            it('toggleNewtab()', function() {
                const action = toggleNewtab();

                expect(action).toEqual({
                    'type': 'TOGGLE_NEWTAB'
                });
            });
            it('toggleStickyHeader()', function() {
                const action = toggleStickyHeader();

                expect(action).toEqual({
                    'type': 'TOGGLE_STICKY_HEADER'
                });
            });
            it('toggleStickyToolbar()', function() {
                const action = toggleStickyToolbar();

                expect(action).toEqual({
                    'type': 'TOGGLE_STICKY_TOOLBAR'
                });
            });
            it('toggleMaxWidth()', function() {
                const action = toggleMaxWidth();

                expect(action).toEqual({
                    'type': 'TOGGLE_MAX_WIDTH'
                });
            });
            it('updateGlobalColor()', function() {
                const action = updateGlobalColor();

                expect(action).toEqual({
                    'type': 'UPDATE_GLOBAL_COLOR'
                });
            });
            it('updateHeaderColor()', function() {
                const action = updateHeaderColor();

                expect(action).toEqual({
                    'type': 'UPDATE_HEADER_COLOR'
                });
            });
            it('updateDashboardType()', function() {
                const action = updateDashboardType();

                expect(action).toEqual({
                    'type': 'UPDATE_DASHBOARD_TYPE'
                });
            });
        });
    });

    describe('reducers', function() {

        describe('called with no valid action', function() {

            it('should return the initial state', function() {
                let state;

                expect(sidebar(state, {})).toEqual({});
            });
        });

        describe('called with an action', function() {

            it('TOGGLE_SIDEBAR: should return the new state', function() {
                const state = {'open': true};

                // ...and not mutate it
                expect(sidebar(state, toggleSidebar())).not.toBe(state);

                expect(sidebar({'open': true}, toggleSidebar())).toEqual({
                    'open': false
                });

                expect(sidebar({'open': false}, toggleSidebar())).toEqual({
                    'open': true
                });
            });

            it('CLOSE_SIDEBAR: should return the new state', function() {
                const state = {'open': true};

                // ...and not mutate it
                expect(sidebar(state, closeSidebar())).not.toBe(state);

                expect(sidebar({'open': true}, closeSidebar())).toEqual({
                    'open': false
                });
            });

            it('TOGGLE_NOTES: should return the new state', function() {
                const state = {'notes': true};

                // ...and not mutate it
                expect(sidebar(state, toggleNotes())).not.toBe(state);

                expect(sidebar({'notes': true}, toggleNotes())).toEqual({
                    'notes': false
                });

                expect(sidebar({'notes': false}, toggleNotes())).toEqual({
                    'notes': true
                });
            });

            it('TOGGLE_AUTOFILL: should return the new state', function() {
                const state = {'autofill': true};

                // ...and not mutate it
                expect(sidebar(state, toggleAutofill())).not.toBe(state);

                expect(sidebar({'autofill': true}, toggleAutofill())).toEqual({
                    'autofill': false
                });

                expect(sidebar({'autofill': false}, toggleAutofill())).toEqual({
                    'autofill': true
                });
            });

            it('TOGGLE_NEWTAB: should return the new state', function() {
                const state = {'newtab': true};

                // ...and not mutate it
                expect(sidebar(state, toggleNewtab())).not.toBe(state);

                expect(sidebar({'newtab': true}, toggleNewtab())).toEqual({
                    'newtab': false
                });

                expect(sidebar({'newtab': false}, toggleNewtab())).toEqual({
                    'newtab': true
                });
            });

            it('TOGGLE_STICKY_HEADER: should return the new state', function() {
                const state = {'stickyHeader': true};

                // ...and not mutate it
                expect(sidebar(state, toggleStickyHeader())).not.toBe(state);

                expect(sidebar({'stickyHeader': true}, toggleStickyHeader())).toEqual({
                    'stickyHeader': false
                });

                expect(sidebar({'stickyHeader': false}, toggleStickyHeader())).toEqual({
                    'stickyHeader': true
                });
            });

            it('TOGGLE_STICKY_TOOLBAR: should return the new state', function() {
                const state = {'stickyToolbar': true};

                // ...and not mutate it
                expect(sidebar(state, toggleStickyToolbar())).not.toBe(state);

                expect(sidebar({'stickyToolbar': true}, toggleStickyToolbar())).toEqual({
                    'stickyToolbar': false
                });

                expect(sidebar({'stickyToolbar': false}, toggleStickyToolbar())).toEqual({
                    'stickyToolbar': true
                });
            });

            it('TOGGLE_MAX_WIDTH: should return the new state', function() {
                const state = {'maxWidth': true};

                // ...and not mutate it
                expect(sidebar(state, toggleMaxWidth())).not.toBe(state);

                expect(sidebar({'maxWidth': true}, toggleMaxWidth())).toEqual({
                    'maxWidth': false
                });

                expect(sidebar({'maxWidth': false}, toggleMaxWidth())).toEqual({
                    'maxWidth': true
                });
            });

            it('UPDATE_GLOBAL_COLOR: should return the new state', function() {
                const state = {'globalColor': 0},
                    newColor = 1;

                // ...and not mutate it
                expect(sidebar(state, updateGlobalColor())).not.toBe(state);

                expect(sidebar({'globalColor': 0}, updateGlobalColor(newColor))).toEqual({
                    'globalColor': 1
                });
            });

            it('UPDATE_HEADER_COLOR: should return the new state', function() {
                const state = {'headerColor': 0},
                    newColor = 1;

                // ...and not mutate it
                expect(sidebar(state, updateHeaderColor())).not.toBe(state);

                expect(sidebar({'headerColor': 0}, updateHeaderColor(newColor))).toEqual({
                    'headerColor': 1
                });
            });

            it('UPDATE_DASHBOARD_TYPE: should return the new state', function() {
                const state = {'dashboard': 0},
                    newDashboard = 1;

                // ...and not mutate it
                expect(sidebar(state, updateDashboardType())).not.toBe(state);

                expect(sidebar({'dashboard': 0}, updateDashboardType(newDashboard))).toEqual({
                    'dashboard': 1
                });
            });
        });
    });
});

/* eslint-enable max-lines */
/* eslint-enable max-statements */
