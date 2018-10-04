import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import { mapStateToProps } from './CategoriesContainer';
import Category from '../../molecules/category';

xdescribe('<Categories />', function() {

  describe('presentational component', function() {

    let component;
    
    const getComponent = function(props = {}) {
      return <Categories { ...props } />;
    };

    describe('should always', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'categories': [{
            'id': 0,
            'name': 'Category 1'
          }, {
            'id': 1,
            'name': 'Category 2'
          }],
          'editMode': false,
          'maxWidth': false,
          'dashboardsPosition': 0
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').first().hasClass('o-categories')).toBe(true);
      });

      it('include all categories passed in', function() {
        expect(component.containsMatchingElement(
          <Category key={ 0 } id={ 0 } name={ 'Category 1' } />
        )).toBe(true);
        expect(component.containsMatchingElement(
          <Category key={ 1 } id={ 1 } name={ 'Category 2' } />
        )).toBe(true);
      });
    });

    describe('with active edit mode', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'categories': [],
          'editMode': true,
          'maxWidth': false,
          'dashboardsPosition': 0
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').first().hasClass('o-categories--edit-mode')).toBe(true);
      });
    });

    describe('with active max width', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'categories': [],
          'editMode': false,
          'maxWidth': true,
          'dashboardsPosition': 0
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').first().hasClass('o-categories--max-width')).toBe(true);
      });
    });

    describe('with dashboards as sidebar', function() {

      beforeEach(function() {
        component = shallow(getComponent({
          'categories': [],
          'editMode': false,
          'maxWidth': true,
          'dashboardsPosition': 1
        }));
      });

      it('should have the correct class', function() {
        expect(component.find('div').first().hasClass('o-categories--sidebar')).toBe(true);
      });
    });
  });

  describe('container component', function() {
    
    const state = {
      'categories': [],
      'toolbar': {
        'editMode': 'banana'
      },
      'sidebar': {
        'maxWidth': 'maxWidth',
        'dashboard': 'dashboard'
      }
    };

    it('should map the state to props', function() {
      expect(mapStateToProps(state)).toEqual({
        'categories': [],
        'editMode': 'banana',
        'maxWidth': 'maxWidth',
        'dashboardsPosition': 'dashboard'
      });
    });
  });
});
