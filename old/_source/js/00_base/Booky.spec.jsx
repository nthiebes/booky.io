import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Booky from './Booky';

describe('<Booky />', function() {

    it('should have a main element', function() {
        const wrapper = shallow(<Booky />);
        expect(wrapper.find('main')).to.have.length(1);
    });

    it('should have the correct class', function() {
        const wrapper = shallow(<Booky />);
        expect(wrapper.find('main').hasClass('o-content')).to.be.true;
    });
});
