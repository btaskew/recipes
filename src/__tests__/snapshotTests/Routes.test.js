import React from 'react';
import renderer from 'react-test-renderer';

import Routes from 'components/Routes';
import {MemoryRouter} from 'react-router';

describe('Routes', () => {
    it('renders correctly', () => {
        const routes = renderer
            .create(
                <MemoryRouter>
                    <Routes  />
                </MemoryRouter>
            )
            .toJSON();
        expect(routes).toMatchSnapshot();
    });
});
