import React from 'react';
import { shallow } from 'enzyme';

import Page from './component.jsx';
import HeaderContainer from '../../03_organisms/header/headerContainer';
import SidebarContainer from '../../03_organisms/sidebar/sidebarContainer';

describe('<Page />', function() {

    let component;
        
    const getComponent = function(props = {}) {
        return <Page { ...props } />;
    };

    describe('when initialized', function() {

        beforeEach(function() {
            component = shallow(getComponent({
                'children': <div>{ 'content' }</div>
            }));
        });

        it('should include the correct markup', function() {
            expect(component.find('div').first().contains(
                <HeaderContainer />,
                <SidebarContainer />,
                <main />
            )).toBe(true);
        });

        it('should include the page content', function() {
            expect(component.find('main').contains(
                <div>{ 'content' }</div>
            )).toBe(true);
        });

        it('should have the correct class', function() {
            expect(component.find('main').hasClass('t-page')).toBe(true);
        });
    });
});
