import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('<Search />', function() {

    it('Should have a stupid test', function() {
        const SEARCH = shallow(<Search />);

        expect(SEARCH.find('.m-search').length).toBe(1);
    });
});