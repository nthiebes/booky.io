import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search.jsx';

describe('<Search />', function() {

    it('Should have a stupid test', function() {
        const SEARCH = shallow(<Search />);

        expect(SEARCH.find('div').hasClass('m-search')).toBe(true);
    });
});
