import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Toolbar from './Toolbar';
import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

describe('<Toolbar />', function() {

    it('Should have a stupid test', function() {
    	const toolbar = shallow(<Toolbar searchOpen={ false } />);

    	console.log(toolbar.debug());
    	
    	expect(toolbar.find('.o-toolbar')).to.have.length(1);

    	expect(toolbar.contains(<Button className="o-toolbar__button a-button--primary" text="New " buzzword="category" />)).to.equal(true);

    	expect(toolbar.contains(<Search className="" open={false} />)).to.equal(true);
    });
});