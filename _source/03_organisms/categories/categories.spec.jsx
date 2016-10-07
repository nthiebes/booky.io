import React from 'react';
import { shallow } from 'enzyme';

import Categories from './Categories.jsx';
import CategoriesContainer, { mapStateToProps } from './categoriesContainer';
import Category from '../../02_molecules/category/Category.jsx';

describe('<Categories />', function() {

    describe('component', function() {

        let categories,
            getComponent = function(props = {}) {
                return <Categories { ...props } />;
            };

        beforeEach(function() {
            categories = shallow(getComponent({
                categories: [{
                    id: 0,
                    name: 'Category 1'
                }, {
                    id: 1,
                    name: 'Category 2'
                }]
            }));
        });

        it('should have the correct class', function() {
            expect(categories.find('main').hasClass('o-categories')).toBe(true);
        });

        it('include all categories passed in', function() {
            expect(categories.containsMatchingElement(
                <Category key={ 0 } id={ 0 } name={ 'Category 1' } />
            )).toBe(true);
            expect(categories.containsMatchingElement(
                <Category key={ 1 } id={ 1 } name={ 'Category 2' } />
            )).toBe(true);
        });
    });

    describe('container', function() {
        
        const state = {
                categories: []
            };

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state);
        });
    });
});