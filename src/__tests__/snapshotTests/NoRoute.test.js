import React from 'react';
import renderer from 'react-test-renderer';

import NoRoute from 'components/NoRoute';
import {MemoryRouter} from 'react-router';

describe('No route page', () => {
    it('renders correctly', () => {
        const noRoute = renderer
            .create(
                <MemoryRouter>
                    <NoRoute  />
                </MemoryRouter>
            )
            .toJSON();
        expect(noRoute).toMatchSnapshot();
    });
});
