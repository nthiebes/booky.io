/* eslint-disable max-lines */
/* eslint-disable max-statements */
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
} from './actions';
import reducer from './reducer';

xdescribe('sidebar', function() {

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

        expect(reducer(state, {})).toEqual({});
      });
    });

    describe('called with an action', function() {

      it('TOGGLE_SIDEBAR: should return the new state', function() {
        const state = {'open': true};

        // ...and not mutate it
        expect(reducer(state, toggleSidebar())).not.toBe(state);

        expect(reducer({'open': true}, toggleSidebar())).toEqual({
          'open': false
        });

        expect(reducer({'open': false}, toggleSidebar())).toEqual({
          'open': true
        });
      });

      it('CLOSE_SIDEBAR: should return the new state', function() {
        const state = {'open': true};

        // ...and not mutate it
        expect(reducer(state, closeSidebar())).not.toBe(state);

        expect(reducer({'open': true}, closeSidebar())).toEqual({
          'open': false
        });
      });

      it('TOGGLE_NOTES: should return the new state', function() {
        const state = {'notes': true};

        // ...and not mutate it
        expect(reducer(state, toggleNotes())).not.toBe(state);

        expect(reducer({'notes': true}, toggleNotes())).toEqual({
          'notes': false
        });

        expect(reducer({'notes': false}, toggleNotes())).toEqual({
          'notes': true
        });
      });

      it('TOGGLE_AUTOFILL: should return the new state', function() {
        const state = {'autofill': true};

        // ...and not mutate it
        expect(reducer(state, toggleAutofill())).not.toBe(state);

        expect(reducer({'autofill': true}, toggleAutofill())).toEqual({
          'autofill': false
        });

        expect(reducer({'autofill': false}, toggleAutofill())).toEqual({
          'autofill': true
        });
      });

      it('TOGGLE_NEWTAB: should return the new state', function() {
        const state = {'newtab': true};

        // ...and not mutate it
        expect(reducer(state, toggleNewtab())).not.toBe(state);

        expect(reducer({'newtab': true}, toggleNewtab())).toEqual({
          'newtab': false
        });

        expect(reducer({'newtab': false}, toggleNewtab())).toEqual({
          'newtab': true
        });
      });

      it('TOGGLE_STICKY_HEADER: should return the new state', function() {
        const state = {'stickyHeader': true};

        // ...and not mutate it
        expect(reducer(state, toggleStickyHeader())).not.toBe(state);

        expect(reducer({'stickyHeader': true}, toggleStickyHeader())).toEqual({
          'stickyHeader': false
        });

        expect(reducer({'stickyHeader': false}, toggleStickyHeader())).toEqual({
          'stickyHeader': true
        });
      });

      it('TOGGLE_STICKY_TOOLBAR: should return the new state', function() {
        const state = {'stickyToolbar': true};

        // ...and not mutate it
        expect(reducer(state, toggleStickyToolbar())).not.toBe(state);

        expect(reducer({'stickyToolbar': true}, toggleStickyToolbar())).toEqual({
          'stickyToolbar': false
        });

        expect(reducer({'stickyToolbar': false}, toggleStickyToolbar())).toEqual({
          'stickyToolbar': true
        });
      });

      it('TOGGLE_MAX_WIDTH: should return the new state', function() {
        const state = {'maxWidth': true};

        // ...and not mutate it
        expect(reducer(state, toggleMaxWidth())).not.toBe(state);

        expect(reducer({'maxWidth': true}, toggleMaxWidth())).toEqual({
          'maxWidth': false
        });

        expect(reducer({'maxWidth': false}, toggleMaxWidth())).toEqual({
          'maxWidth': true
        });
      });

      it('UPDATE_GLOBAL_COLOR: should return the new state', function() {
        const state = {'globalColor': 0},
          newColor = 1;

        // ...and not mutate it
        expect(reducer(state, updateGlobalColor())).not.toBe(state);

        expect(reducer({'globalColor': 0}, updateGlobalColor(newColor))).toEqual({
          'globalColor': 1
        });
      });

      it('UPDATE_HEADER_COLOR: should return the new state', function() {
        const state = {'headerColor': 0},
          newColor = 1;

        // ...and not mutate it
        expect(reducer(state, updateHeaderColor())).not.toBe(state);

        expect(reducer({'headerColor': 0}, updateHeaderColor(newColor))).toEqual({
          'headerColor': 1
        });
      });

      it('UPDATE_DASHBOARD_TYPE: should return the new state', function() {
        const state = {'dashboard': 0},
          newDashboard = 1;

        // ...and not mutate it
        expect(reducer(state, updateDashboardType())).not.toBe(state);

        expect(reducer({'dashboard': 0}, updateDashboardType(newDashboard))).toEqual({
          'dashboard': 1
        });
      });
    });
  });
});

/* eslint-enable max-lines */
/* eslint-enable max-statements */
