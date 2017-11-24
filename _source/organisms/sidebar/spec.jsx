/* eslint-disable max-lines */
/* eslint-disable max-statements */
import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './component.jsx';
import { mapStateToProps, mapDispatchToProps } from './container';
import {
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
} from '../../_state/sidebar/actions';
// import Button from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import ColorPicker from '../../molecules/color-picker';
import Dropdown from '../../molecules/dropdown';

xdescribe('<Sidebar />', function() {

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
          // <Button onButtonClick={ onDoneClickCallback } text="Done" />,
          <h2 className="o-sidebar__subheading">{ 'Global color scheme' }</h2>,
          <ColorPicker onColorChange={ onGlobalColorChangeCallback } activeColor={ 0 } />,
          <h2 className="o-sidebar__subheading">{ 'Header color' }</h2>,
          <ColorPicker onColorChange={ onHeaderColorChangeCallback } activeColor={ 1 } />,
          <h2 className="o-sidebar__subheading">{ 'Layout' }</h2>,
          <Checkbox onCheckboxClick={ onStickyHeaderClickCallback } label={ 'Sticky header' } checked={ true } />,
          <Checkbox onCheckboxClick= { onStickyToolbarClickCallback } label={ 'Sticky toolbar' } checked={ true } />,
          <Checkbox label={ 'Width limitation (two columns)' } checked={ true } onCheckboxClick={ onMaxWidthClickCallback } />,
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
});

/* eslint-enable max-lines */
/* eslint-enable max-statements */
