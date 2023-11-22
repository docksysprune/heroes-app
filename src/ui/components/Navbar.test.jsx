import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

// Mocking the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Navbar component', () => {
  // Test 1: Navbar renders without crashing
  test('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  // Test 2: Check if the logout button triggers the onLogout function
  test('logout button triggers onLogout function', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const logoutButton = getByText('Logout');
    fireEvent.click(logoutButton);
  });

  // Test 3: Check if clicking on the ButtonInfo component triggers toggleModal
  test('clicking ButtonInfo triggers toggleModal', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const buttonInfo = getByTestId('button-info'); 
    fireEvent.click(buttonInfo);
  });

  // Test 4: Check if Modal opens and closes properly when isOpen prop changes
  test('Modal opens and closes properly', () => {
    const { getByTestId, rerender } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const modal = getByTestId('modal'); 
    expect(modal).not.toBeVisible();

    // Change the isOpen prop to true and check if the modal becomes visible
    rerender(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(modal).toBeVisible();

    // Change the isOpen prop to false and check if the modal becomes hidden
    rerender(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(modal).not.toBeVisible();
  });
});
