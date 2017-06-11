import { toggleMainMenu, closeMainMenu, toggleDashboards, closeDashboards } from './actions';
import reducer from './reducer';

describe('header', function() {

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

        expect(reducer(state, {})).toEqual({});
      });
    });

    describe('called with an action', function() {

      it('TOGGLE_MAIN_MENU: should return the new state', function() {
        const state = {'menuMainOpen': true};

        // ...and not mutate it
        expect(reducer(state, toggleMainMenu())).not.toBe(state);

        expect(reducer({'menuMainOpen': true}, toggleMainMenu())).toEqual({
          'menuMainOpen': false
        });

        expect(reducer({'menuMainOpen': false}, toggleMainMenu())).toEqual({
          'menuMainOpen': true
        });
      });

      it('CLOSE_MAIN_MENU: should return the new state', function() {
        const state = {'menuMainOpen': true};

        // ...and not mutate it
        expect(reducer(state, closeMainMenu())).not.toBe(state);

        expect(reducer({'menuMainOpen': true}, closeMainMenu())).toEqual({
          'menuMainOpen': false
        });
      });

      it('TOGGLE_DASHBOARDS: should return the new state', function() {
        const state = {'dashboardsOpen': true};

        // ...and not mutate it
        expect(reducer(state, toggleDashboards())).not.toBe(state);

        expect(reducer({'dashboardsOpen': true}, toggleDashboards())).toEqual({
          'dashboardsOpen': false
        });

        expect(reducer({'dashboardsOpen': false}, toggleDashboards())).toEqual({
          'dashboardsOpen': true
        });
      });

      it('CLOSE_DASHBOARDS: should return the new state', function() {
        const state = {'dashboardsOpen': true};

        // ...and not mutate it
        expect(reducer(state, closeDashboards())).not.toBe(state);

        expect(reducer({'dashboardsOpen': true}, closeDashboards())).toEqual({
          'dashboardsOpen': false
        });
      });
    });
  });
});
