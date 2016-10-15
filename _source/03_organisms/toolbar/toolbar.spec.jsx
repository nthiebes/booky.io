import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar.jsx';
import { mapStateToProps, mapDispatchToProps } from './toolbarContainer';
import { toggleSearch } from './toolbarActions';
import toolbar from './toolbarReducers';

describe('<Toolbar />', function() {

    describe('presentational component', function() {

        let component,
            callback;

        const getComponent = function(props = {}) {
            return <Toolbar { ...props } />;
        };

        beforeEach(function() {
            callback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'onSearchClick': callback,
                    'searchOpen': false
                }));
            });

            it('include a button for new categories', function() {
                const buttonProps = component.find('Button').props();

                expect(buttonProps.className).toBe('o-toolbar__button a-button--primary');
                expect(buttonProps.text).toBe('New');
                expect(buttonProps.buzzword).toBe('category');
                expect(buttonProps.color).toBe('primary');
                expect(buttonProps.size).toBe('small');
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'searchOpen': true,
                    'onSearchClick': callback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('o-toolbar o-toolbar--open')).toBe(true);
            });

            it('should include a search bar', function() {
                const searchProps = component.find('Search').props();

                expect(searchProps.className).toBe('m-search--open');
                expect(searchProps.open).toBe(true);
            });

            it('include an icon', function() {
                const iconProps = component.find('Icon').props();

                expect(iconProps).toEqual({
                    'className': 'o-toolbar__icon a-icon--dark',
                    'icon': 'close',
                    'onClick': callback
                });
            });
        });

        describe('when rendered closed', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'searchOpen': false,
                    'onSearchClick': callback
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('o-toolbar')).toBe(true);
                expect(component.find('div').hasClass('o-toolbar--open')).toBe(false);
            });

            it('should include a search bar', function() {
                const searchProps = component.find('Search').props();

                expect(searchProps.className).toBe('');
                expect(searchProps.open).toBe(false);
            });

            it('include an icon', function() {
                const iconProps = component.find('Icon').props();

                expect(iconProps).toEqual({
                    'className': 'o-toolbar__icon a-icon--dark',
                    'icon': 'search',
                    'onClick': callback
                });
            });
        });
    });

    describe('container component', function() {

        const state = {
                'toolbar': {
                    'searchOpen': 'banana'
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
                const state = {'searchOpen': true};

                // ...and not mutate it
                expect(toolbar(state, toggleSearch())).not.toBe(state);

                expect(toolbar({'searchOpen': true}, toggleSearch())).toEqual({
                    'searchOpen': false
                });

                expect(toolbar({'searchOpen': false}, toggleSearch())).toEqual({
                    'searchOpen': true
                });
            });
        });
    });
});
