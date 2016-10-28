import React from 'react';
import { shallow } from 'enzyme';

import Category from './Category.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';

describe('<Category />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <Category { ...props } />;
    };

    describe('when initialized', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'name': 'Banana category'
            }));
        });

        it('should have the correct class', function() {
            expect(component.find('section').hasClass('m-category')).toBe(true);
        });

        it('should include a header', function() {
            expect(component.contains(
                <header className="m-category__header">
                    <Icon className="m-category__icon a-icon--dark" icon="reduce" title="Reduce category" />
                    <h1 className="m-category__name">
                        <span className="m-category__name-inner">{ 'Banana category' }</span>
                    </h1>
                    <Icon className="m-category__icon m-category__icon--edit-mode a-icon--dark" icon="edit" title="Edit category" />
                    <Icon className="m-category__icon m-category__icon--edit-mode a-icon--dark" icon="delete" title="Delete category" />
                    <Icon className="m-category__icon m-category__icon--edit-mode a-icon--dark m-category__icon--drag" icon="drag" title="Drag category" />
                </header>
            )).toBe(true);
        });

        it('should include the bookmarks', function() {
            expect(component.find('ul').hasClass('m-category__bookmarks')).toBe(true);

            // bookmarks are not dynamic yet
        });
    });
});
