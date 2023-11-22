import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  it('renders Navbar correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    expect(screen.getByText('HeroesApp')).toBeInTheDocument();
    expect(screen.getByText('Marvel')).toBeInTheDocument();
    expect(screen.getByText('DC')).toBeInTheDocument();
    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('navigates to /marvel when Marvel link is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Marvel'));
    expect(window.location.pathname).toBe('/marvel');
  });

  it('logs out when Logout button is clicked', () => {
    const navigate = jest.fn(); 

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    window.location.pathname = '/'; 
    window.navigate = navigate;

    fireEvent.click(screen.getByText('Logout'));
    expect(navigate).toHaveBeenCalledWith('/login', { replace: true });
  });

  it('toggles modal when Info button is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('info-button'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('info-button'));
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});
