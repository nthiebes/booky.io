import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.jsx';

describe('<Header />', function() {

    it('Should have a stupid test', function() {
        const header = shallow(<Header />);

        expect(header.find('.o-header').length).toBe(1);
    });
});