import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';
import Button from '../../01_atoms/button/Button.jsx';
import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';

describe('<Toolbar />', function() {

    var toolbar,
        callback,
        getComponent = function(props) {
            return <Toolbar {...props} />;
        };

    beforeEach(function() {
        callback = jest.fn();
    });

    describe('when rendered open', function() {

        beforeEach(function() {
            toolbar = shallow(getComponent({
                searchOpen: true
            }));
        });

        it('should have the correct class', function() {
            expect(toolbar.find('.o-toolbar').length).toBe(1);
            expect(toolbar.find('.o-toolbar--open').length).toBe(1);
        });

        it('should include a search bar', function() {
            expect(toolbar.contains(
                <Search className="m-search--open" open={ true } />
            )).toEqual(true);
        });
    });

    describe('when rendered closed', function() {

        beforeEach(function() {
            toolbar = shallow(getComponent({
                searchOpen: false
            }));
        });

        it('should have the correct class', function() {
            expect(toolbar.find('.o-toolbar').length).toBe(1);
            expect(toolbar.find('.o-toolbar--open').length).toBe(0);
        });

        it('should include a search bar', function() {
            expect(toolbar.contains(
                <Search className="" open={ false } />
            )).toEqual(true);
        });
    });

    describe('should always', function() {

        beforeEach(function() {
            toolbar = shallow(getComponent({
                onSearchClick: callback
            }));
        });

        it('include a button for new categories', function() {
            expect(toolbar.contains(
                <Button className="o-toolbar__button a-button--primary" text="New " buzzword="category" />
            )).toEqual(true);
        });

        it('include an icon', function() {
            expect(toolbar.contains(
                <Icon icon="search" className="o-toolbar__icon a-icon--dark" onClick={ callback } />
            )).toEqual(true);
        });
    });
});