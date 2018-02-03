import React from 'react';
import renderer from 'react-test-renderer';

import MainMenu from 'mainMenu/MainMenu';
import {MemoryRouter} from 'react-router';

describe('MainMenu', () => {
    it('renders correctly', () => {
        const mainMenu = renderer
            .create(
                <MemoryRouter>
                    <MainMenu />
                </MemoryRouter>
            )
            .toJSON();
        expect(mainMenu).toMatchSnapshot();
    });
});
