import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar.jsx';
import ToolbarContainer from './toolbarContainer';
import { toggleSearch } from  './toolbarActions';
import toolbar from './toolbarReducers';

describe('<Toolbar />', function() {

    describe('component', function() {

        let toolbar,
            callback,
            getComponent = function(props = {}) {
                return <Toolbar { ...props } />;
            };

        beforeEach(function() {
            callback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                toolbar = shallow(getComponent({
                    onSearchClick: callback
                }));
            });

            it('include a button for new categories', function() {
                const buttonProps = toolbar.find('Button').props();

                expect(buttonProps.className).toBe('o-toolbar__button a-button--primary');
                expect(buttonProps.text).toBe('New ');
                expect(buttonProps.buzzword).toBe('category');
            });

            it('include an icon', function() {
                const iconProps = toolbar.find('Icon').props();

                expect(iconProps.className).toBe('o-toolbar__icon a-icon--dark');
                expect(iconProps.icon).toBe('search');
                expect(iconProps.onClick).toBe(callback);
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                toolbar = shallow(getComponent({
                    searchOpen: true
                }));
            });

            it('should have the correct class', function() {
                expect(toolbar.find('div').hasClass('o-toolbar o-toolbar--open')).toBe(true);
            });

            it('should include a search bar', function() {
                const searchProps = toolbar.find('Search').props();

                expect(searchProps.className).toBe('m-search--open');
                expect(searchProps.open).toBe(true);
            });
        });

        describe('when rendered closed', function() {

            beforeEach(function() {
                toolbar = shallow(getComponent({
                    searchOpen: false
                }));
            });

            it('should have the correct class', function() {
                expect(toolbar.find('div').hasClass('o-toolbar')).toBe(true);
                expect(toolbar.find('div').hasClass('o-toolbar--open')).toBe(false);
            });

            it('should include a search bar', function() {
                const searchProps = toolbar.find('Search').props();

                expect(searchProps.className).toBe('');
                expect(searchProps.open).toBe(false);
            });
        });
    });

    describe('container', function() {

    });

    describe('actions', function() {

        describe('toggleSearch()', function() {

            it('should return the action', function() {
                let action = toggleSearch();

                expect(action).toEqual({
                    type: 'TOGGLE_SEARCH'
                });
            });
        });
    });

    describe('reducers', function() {

        describe('called with no valid action', function() {

            it('should return the initial state', function() {
                expect(toolbar(undefined, {})).toEqual({});
            });
        });

        describe('called with an action', function() {

            it('TOGGLE_SEARCH: should return the new state', function() {
                let state = {searchOpen: true};

                // ...and not mutate it
                expect(toolbar(state, toggleSearch())).not.toBe(state);

                expect(toolbar({searchOpen: true}, toggleSearch())).toEqual({
                    searchOpen: false
                });

                expect(toolbar({searchOpen: false}, toggleSearch())).toEqual({
                    searchOpen: true
                });
            });
        });
    });
});