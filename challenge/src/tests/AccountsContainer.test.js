import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AccountsContainer } from '../components/AccountsContainer';

describe('AccountsContainer', () => {
  test('renders account buttons', () => {
    render(<AccountsContainer />);
    
    const accountButtons = screen.getAllByTestId('account-button');
    expect(accountButtons.length).toBeGreaterThan(0);
  });

  test('displays account details when an account button is clicked', () => {
    render(<AccountsContainer />);
    
    // Replace 'Test Account Number' with an actual account number that exists in your data.
    const accountButton = screen.getByText(872378326799);
    fireEvent.click(accountButton);
    
    // Assuming you have a custom component with 'account-details' class for the account details.
    const accountDetails = screen.getByTestId('account-details');
    expect(accountDetails).toBeInTheDocument();
  });

  test('navigates to previous page when "Opciones anteriores" button is clicked', () => {
    render(<AccountsContainer />);
    
    // Assuming you have a custom component with 'previous-page-button' class for the "Opciones anteriores" button.
    const previousPageButton = screen.getByTestId('previous-page-button');
    fireEvent.click(previousPageButton);
    
    // Assert that the previous page is shown. You can validate the account buttons displayed on the page.
    const accountButtons = screen.getAllByTestId('account-button');
    // Add your assertion here.
  });

  test('navigates to next page when "Mas opciones >>" button is clicked', () => {
    render(<AccountsContainer />);
    
    // Assuming you have a custom component with 'next-page-button' class for the "Mas opciones >>" button.
    const nextPageButton = screen.getByTestId('next-page-button');
    fireEvent.click(nextPageButton);
    
    // Assert that the next page is shown. You can validate the account buttons displayed on the page.
    const accountButtons = screen.getAllByTestId('account-button');
    // Add your assertion here.
  });

  test('returns to the list of account buttons when "Salir" button is clicked', () => {
    render(<AccountsContainer />);
    
    // Assuming you have a custom component with 'exit-button' class for the "Salir" button.
    const exitButton = screen.getByTestId('exit-button');
    fireEvent.click(exitButton);
    
    // Assert that the list of account buttons is shown.
    const accountButtons = screen.getAllByTestId('account-button');
    expect(accountButtons.length).toBeGreaterThan(0);
  });
});