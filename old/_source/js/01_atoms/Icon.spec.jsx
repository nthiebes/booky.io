import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Icon from './Icon';

describe('<Icon />', function() {

    it('should render correct svg markup', function() {
        const wrapper = shallow(<Icon />);
        expect(wrapper.find('svg')).to.have.length(1);
        expect(wrapper.find('svg').childAt(0).type()).to.equal('use');

        expect(wrapper.containsMatchingElement(
            <use xlinkHref="img/symbol-defs.svg#icon-undefined"></use>
        )).to.equal(true);
    });

    describe('should have the correct class', function() {

        it('when a class name is passed in', function() {
            const wrapper = shallow(<Icon className="banana" />);
            expect(wrapper.find('svg').hasClass('a-icon banana')).to.be.true;
        });

        it('when no class name is passed in', function() {
            const wrapper = shallow(<Icon />);
            expect(wrapper.find('svg').hasClass('a-icon')).to.be.true;
        });
    });
});
