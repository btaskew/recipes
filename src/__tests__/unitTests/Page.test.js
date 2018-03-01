import React from 'react';
import {shallow} from 'enzyme';
import enzymeConfig from 'enzyme.config';

import Page from 'components/Page';
import PageContents from 'components/PageContents';

describe('Page', () => {
    it('should display Loading as the header when none provided for loading state', () => {
        const wrapper = shallow(<Page loading={true} />);

        expect(wrapper.find(PageContents).props().heading).toBe('Loading...')
    });
});
