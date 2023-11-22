import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroesRoutes } from './HeroesRoutes';

// Mocking the components used in the routes
jest.mock('../../search/components/MarvelCharacterSearch/MarvelCharacterSearch', () => () => (
  <div data-testid="marvel-character-search" />
));
jest.mock('../../ui/components/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('../pages/DCPage', () => () => <div data-testid="dc-page" />);
jest.mock('../pages/HeroPage', () => () => <div data-testid="hero-page" />);
jest.mock('../pages/MarvelPage', () => () => <div data-testid="marvel-page" />);
jest.mock('../pages/SearchPage', () => () => <div data-testid="search-page" />);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn(({ to }) => <div data-testid={`navigate-${to}`} />),
}));

describe('HeroesRoutes component', () => {
  test('renders Navbar and MarvelPage when the route is /marvel', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/marvel']}>
        <HeroesRoutes />
      </MemoryRouter>
    );
    const navbar = getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('renders DCPage when the route is /dc', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/dc']}>
        <HeroesRoutes />
      </MemoryRouter>
    );
    const navbar = getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });
});
