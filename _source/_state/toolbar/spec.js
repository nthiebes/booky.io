/* eslint-disable max-lines */
/* eslint-disable max-statements */
import { toggleSearch, toggleEditMode, updateCurrentlySticky } from './actions';
import reducer from './reducer';

xdescribe('toolbar', function() {

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

    describe('updateCurrentlySticky()', function() {

      it('should return the action', function() {
        const action = updateCurrentlySticky('potato');

        expect(action).toEqual({
          'type': 'UPDATE_STICKY',
          'currentlySticky': 'potato'
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

      it('TOGGLE_SEARCH: should return the new state', function() {
        const state = {
          'searchOpen': true,
          'searchFocused': true
        };

        // ...and not mutate it
        expect(reducer(state, toggleSearch())).not.toBe(state);

        expect(reducer({'searchOpen': true}, toggleSearch())).toEqual({
          'searchOpen': false,
          'searchFocused': false
        });

        expect(reducer({'searchOpen': false}, toggleSearch())).toEqual({
          'searchOpen': true,
          'searchFocused': true
        });
      });

      it('TOGGLE_EDIT_MODE: should return the new state', function() {
        const state = {'editMode': true};

        // ...and not mutate it
        expect(reducer(state, toggleEditMode())).not.toBe(state);

        expect(reducer({'editMode': true}, toggleEditMode())).toEqual({
          'editMode': false,
          'searchFocused': false
        });

        expect(reducer({'editMode': false}, toggleEditMode())).toEqual({
          'editMode': true,
          'searchFocused': false
        });
      });

      it('UPDATE_STICKY: should return the new state', function() {
        const state = {'currentlySticky': 'banana'};

        // ...and not mutate it
        expect(reducer(state, updateCurrentlySticky())).not.toBe(state);

        expect(reducer({'currentlySticky': 'potato'}, updateCurrentlySticky('potato'))).toEqual({
          'currentlySticky': 'potato'
        });
      });
    });
  });
});

/* eslint-enable max-lines */
/* eslint-enabled max-statements */
