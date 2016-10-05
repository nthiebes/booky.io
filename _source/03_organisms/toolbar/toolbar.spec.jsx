import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';
import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

describe('<Toolbar />', function() {

    it('Should have a stupid test', function() {
        const toolbar = shallow(<Toolbar searchOpen={ false } />);
        
        expect(toolbar.find('.o-toolbar').length).toBe(1);

        expect(toolbar.contains(
            <Button className="o-toolbar__button a-button--primary" text="New " buzzword="category" />)
        ).toEqual(true);

        expect(toolbar.contains(
            <Search className="" open={ false } />)
        ).toEqual(true);
    });
});