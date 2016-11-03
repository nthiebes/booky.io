import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar.jsx';
import { mapStateToProps } from './sidebarContainer';
import { toggleSidebar, closeSidebar } from '../sidebar/sidebarActions';
import sidebar from './sidebarReducers';
import Button from '../../01_atoms/button/Button.jsx';
import ColorPicker from '../../02_molecules/color-picker/ColorPicker.jsx';

describe('<Sidebar />', function() {

    describe('presentational component', function() {

        let component;
        
        const getComponent = function(props = {}) {
            return <Sidebar { ...props } />;
        };

        beforeEach(function() {
            // onMenuMainClickCallback = jest.fn();
        });

        describe('should always', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'open': false
                }));
            });

            it('have the correct class', function() {
                expect(component.find('aside').hasClass('o-sidebar ')).toBe(true);
            });

            it('include all required elements', function() {

                /* eslint-disable react/jsx-key */
                expect(component.contains([
                    <h1 className="o-sidebar__heading">{ 'Customize booky' }</h1>,
                    <Button className="o-sidebar__button" text="Done" />,
                    <h2 className="o-sidebar__subheading">{ 'Global color scheme' }</h2>,
                    <ColorPicker defaultColor={ 0 } activeColor={ 0 } />,
                    <h2 className="o-sidebar__subheading">{ 'Header color' }</h2>,
                    <ColorPicker defaultColor={ 0 } activeColor={ 0 } />,
                    <h2 className="o-sidebar__subheading">{ 'Layout' }</h2>,
                    <h2 className="o-sidebar__subheading">{ 'Dashboards' }</h2>,
                    <h2 className="o-sidebar__subheading">{ 'Preferences' }</h2>
                ])).toBe(true);

                /* eslint-enable react/jsx-key */
            });
        });

        describe('when rendered open', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'open': true
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
                'open': 'potato'
            }
        };

        it('should map the state to props', function() {
            expect(mapStateToProps(state)).toEqual(state.sidebar);
        });
    });

    describe('actions', function() {

        describe('toggleSidebar()', function() {

            it('should return the action', function() {
                const action = toggleSidebar();

                expect(action).toEqual({
                    'type': 'TOGGLE_SIDEBAR'
                });
            });
        });

        describe('closeSidebar()', function() {

            it('should return the action', function() {
                const action = closeSidebar();

                expect(action).toEqual({
                    'type': 'CLOSE_SIDEBAR'
                });
            });
        });
    });

    describe('reducers', function() {

        describe('called with no valid action', function() {

            it('should return the initial state', function() {
                let state;

                expect(sidebar(state, {})).toEqual({});
            });
        });

        describe('called with an action', function() {

            it('TOGGLE_SIDEBAR: should return the new state', function() {
                const state = {'open': true};

                // ...and not mutate it
                expect(sidebar(state, toggleSidebar())).not.toBe(state);

                expect(sidebar({'open': true}, toggleSidebar())).toEqual({
                    'open': false
                });

                expect(sidebar({'open': false}, toggleSidebar())).toEqual({
                    'open': true
                });
            });

            it('CLOSE_SIDEBAR: should return the new state', function() {
                const state = {'open': true};

                // ...and not mutate it
                expect(sidebar(state, closeSidebar())).not.toBe(state);

                expect(sidebar({'open': true}, closeSidebar())).toEqual({
                    'open': false
                });
            });
        });
    });
});
