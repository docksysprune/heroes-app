import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';

// Mocking the components used in the routes
jest.mock('../auth/pages/LoginPage/LoginPage', () => () => <div data-testid="login-page" />);
jest.mock('../heroes/routes/HeroesRoutes', () => () => <div data-testid="heroes-routes" />);

describe('AppRouter component', () => {
  test('renders LoginPage on /login route', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/login']}>
        <AppRouter />
      </MemoryRouter>
    );
    const loginPage = getByTestId('login-page');
    expect(loginPage).toBeInTheDocument();
  });

  test('renders HeroesRoutes on any other route', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/some-other-route']}>
        <AppRouter />
      </MemoryRouter>
    );
    const heroesRoutes = getByTestId('heroes-routes');
    expect(heroesRoutes).toBeInTheDocument();
  });
});
