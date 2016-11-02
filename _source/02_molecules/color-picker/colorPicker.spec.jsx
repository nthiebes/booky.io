import React from 'react';
import { shallow } from 'enzyme';

import ColorPicker from './ColorPicker.jsx';

describe('<ColorPicker />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <ColorPicker { ...props } />;
    };

    describe('when initialized without optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'defaultColor': 0
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('div').hasClass('m-color-picker ')).toBe(true);
        });

        it('should include all the colors', function() {

            /* eslint-disable react/jsx-key */
            expect(component.contains([
                <span key={ 0 } className={ 'm-color-picker__color m-color-picker__color--0 m-color-picker__color--active' } />,
                <span key={ 1 } className={ 'm-color-picker__color m-color-picker__color--1 ' } />,
                <span key={ 2 } className={ 'm-color-picker__color m-color-picker__color--2 ' } />,
                <span key={ 3 } className={ 'm-color-picker__color m-color-picker__color--3 ' } />,
                <span key={ 4 } className={ 'm-color-picker__color m-color-picker__color--4 ' } />,
                <span key={ 5 } className={ 'm-color-picker__color m-color-picker__color--5 ' } />,
                <span key={ 6 } className={ 'm-color-picker__color m-color-picker__color--6 ' } />,
                <span key={ 7 } className={ 'm-color-picker__color m-color-picker__color--7 ' } />,
                <span key={ 8 } className={ 'm-color-picker__color m-color-picker__color--8 ' } />
            ])).toBe(true);

            /* eslint-enable react/jsx-key */
        });
    });

    describe('when initialized with optional parameters', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'defaultColor': 0,
                'activeColor': 1,
                'className': 'banana'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('div').hasClass('m-color-picker banana')).toBe(true);
        });

        it('should select the active color', function() {
            expect(component.contains(
                <span key={ 0 } className={ 'm-color-picker__color m-color-picker__color--0 m-color-picker__color--active' } />
            )).toBe(false);

            expect(component.contains(
                <span key={ 1 } className={ 'm-color-picker__color m-color-picker__color--1 m-color-picker__color--active' } />
            )).toBe(true);
        });
    });
});
