/* eslint-disable max-lines */
/* eslint-disable max-statements */
import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import { mapStateToProps, mapDispatchToProps } from './ToolbarContainer';
import { toggleSearch, toggleEditMode, updateCurrentlySticky } from '../../_state/toolbar/actions';
import Icon from '../../atoms/icon';
// import Button from '../../atoms/button';
import Dashboards from '../../organisms/dashboards';

xdescribe('<Toolbar />', function() {

  describe('presentational component', function() {

    let component,
      onEditModeClickCallback,
      onSearchClickCallback,
      updateCurrentlyStickyCallback;

    const getComponent = function(props = {}) {
      return <Toolbar { ...props } />;
    };

    beforeEach(function() {
      onEditModeClickCallback = jest.fn();
      onSearchClickCallback = jest.fn();
      updateCurrentlyStickyCallback = jest.fn();
    });

    describe('should always', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'onSearchClick': onSearchClickCallback,
          'onEditModeClick': onEditModeClickCallback,
          'updateCurrentlySticky': updateCurrentlyStickyCallback,
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
        )).toBe(true);
      });

      it('include a button for new categories', function() {
        expect(component.contains(
          // <Button className="o-toolbar__button a-button--primary" size="small" color="primary" text="New" buzzword="Category" />
        )).toBe(true);
      });

      it('include the dashboards', function() {
        expect(component.contains(
          <Dashboards position={ 0 } />
        )).toBe(true);
      });
    });

    describe('after mounting', function() {

      it('should register the scroll action', function() {
        //
      });
    });

    describe('before receiving props', function() {

      it('should update the scroll status', function() {
        //
      });
    });

    describe('before unmounting', function() {

      it('should remove the scroll action', function() {
        //
      });
    });

    describe('when rendered with open search and with optional props', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'onSearchClick': onSearchClickCallback,
          'onEditModeClick': onEditModeClickCallback,
          'updateCurrentlySticky': updateCurrentlyStickyCallback,
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
            icon={ 'close' } 
            className="o-toolbar__icon o-toolbar__icon--search a-icon--dark" 
            onClick={ onSearchClickCallback } 
            title={ 'Close' } 
          />
        )).toBe(true);
      });
    });

    describe('when rendered with closed search', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'onSearchClick': onSearchClickCallback,
          'onEditModeClick': onEditModeClickCallback,
          'updateCurrentlySticky': updateCurrentlyStickyCallback,
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
            icon={ 'search' } 
            className="o-toolbar__icon o-toolbar__icon--search a-icon--dark" 
            onClick={ onSearchClickCallback } 
            title={ 'Search' } 
          />
        )).toBe(true);
      });
    });

    describe('when edit mode is enabled', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'onSearchClick': onSearchClickCallback,
          'onEditModeClick': onEditModeClickCallback,
          'updateCurrentlySticky': updateCurrentlyStickyCallback,
          'searchOpen': true,
          'editMode': true,
          'sticky': false
        }));
      });

      it('should include the correct icon', function() {
        expect(component.contains(
          <Icon icon={ 'view' } className="o-toolbar__icon a-icon--dark" title={ 'View mode' } onClick={ onEditModeClickCallback } />
        )).toBe(true);
      });
    });

    describe('when edit mode is disabled', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'onSearchClick': onSearchClickCallback,
          'onEditModeClick': onEditModeClickCallback,
          'updateCurrentlySticky': updateCurrentlyStickyCallback,
          'searchOpen': true,
          'editMode': false,
          'sticky': false
        }));
      });

      it('should include the correct icon', function() {
        expect(component.contains(
          <Icon icon={ 'edit' } className="o-toolbar__icon a-icon--dark" title={ 'Edit mode' } onClick={ onEditModeClickCallback } />
        )).toBe(true);
      });
    });

    describe('when toolbar is sticky', function() {

      describe('and header is not', function() {

        describe('before the offset', function() {

          beforeEach(function() {
            component = shallow(getComponent({
              'onSearchClick': onSearchClickCallback,
              'onEditModeClick': onEditModeClickCallback,
              'updateCurrentlySticky': updateCurrentlyStickyCallback,
              'searchOpen': true,
              'editMode': true,
              'sticky': true,
              'headerSticky': false,
              'currentlySticky': false
            }));
          });

          it('should have the correct class', function() {
            expect(component.find('div').hasClass('o-toolbar--sticky')).toBe(false);
            expect(component.find('div').hasClass('o-toolbar--sticky-one-and-only')).toBe(false);
          });
        });

        describe('after the offset', function() {

          beforeEach(function() {
            component = shallow(getComponent({
              'onSearchClick': onSearchClickCallback,
              'onEditModeClick': onEditModeClickCallback,
              'updateCurrentlySticky': updateCurrentlyStickyCallback,
              'searchOpen': true,
              'editMode': true,
              'sticky': true,
              'headerSticky': false,
              'currentlySticky': true
            }));
          });

          it('should have the correct class', function() {
            expect(component.find('div').hasClass('o-toolbar--sticky-one-and-only')).toBe(true);
          });
        });
      });
    });
  });

  describe('container component', function() {

    const state = {
        'toolbar': {
          'currentlySticky': 'currentlySticky',
          'editMode': 'editMode',
          'headerSticky': 'stickyHeader',
          'searchFocused': 'searchFocused',
          'searchOpen': 'searchOpen',
          'sticky': 'stickyToolbar'
        },
        'sidebar': {
          'stickyToolbar': 'stickyToolbar',
          'stickyHeader': 'stickyHeader'
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

      mapDispatchToProps(dispatch).updateCurrentlySticky();

      expect(typeof mapDispatchToProps(dispatch).updateCurrentlySticky).toBe('function');
      expect(dispatch).toHaveBeenCalledWith(updateCurrentlySticky());
    });
  });
});

/* eslint-enable max-lines */
/* eslint-enabled max-statements */
