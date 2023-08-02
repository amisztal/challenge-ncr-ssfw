import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AccountsContainer } from '../components/AccountsContainer';
import * as api from '../js/api'; // Import the API module

describe('AccountsContainer', () => {
  const mockGetAccounts = (data) => {
    return jest.fn().mockResolvedValue(data);
  };

  const mockAccounts = [{
    'e': "1",
    'moneda': "u$s",
    'n': "872378326799",
    'saldo': "250",
    't': "11",
    'tipo_letras': "CC"
  },
  {
    'e': "1",
    'moneda': "$",
    'n': "872378326703",
    'saldo': "745",
    't': "01",
    'tipo_letras': "CC"
  },
  {
    'e': "1",
    'moneda': "$",
    'n': "872378326705",
    'saldo': "569",
    't': "01",
    'tipo_letras': "CC"
  },
  {
    'e': "1",
    'moneda': "$",
    'n': "872378326706",
    'saldo': "2-5-0",
    't': "01",
    'tipo_letras': "CA"
  },
  {
    'e': "1",
    'moneda': "$",
    'n': "872378326709",
    'saldo': "458",
    't': "01",
    'tipo_letras': "CC"
  },
  {
    'e': "1",
    'moneda': "$",
    'n': "872378327823",
    'saldo': "250",
    't': "11",
    'tipo_letras': "CA"
  },
  {
    'e': "1",
    'moneda': "$",
    'n': "872378327823",
    'saldo': "250",
    't': "11",
    'tipo_letras': "CA"
  }];

  beforeEach(() => {
    jest.spyOn(api, 'getAccounts').mockImplementation(mockGetAccounts(mockAccounts));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders account buttons', async () => {
    await act(async () => {
      render(<AccountsContainer />);
    });

    const accountButtons = screen.getAllByTestId('account-button');
    expect(accountButtons.length).toBeGreaterThan(0);
  });

  
  it('renders max 6 account buttons', async () => {
    await act(async () => {
      render(<AccountsContainer />);
    });
    
    const accountButtons = screen.getAllByTestId('account-button');
    expect(accountButtons.length).toBeLessThan(7);
  });

  test('displays account details when an account button is clicked', async () => {
    await act(async () => {
      render(<AccountsContainer />);
    });
    
    const accountButton = screen.getAllByTestId('account-button')[0];
    fireEvent.click(accountButton);
    
    const accountDetails = screen.getAllByTestId('account-details');
    expect(accountDetails.length).toBeGreaterThan(0);
  });

  test('returns to the list of account buttons when "Salir" button is clicked', async () => {
    await act(async () => {
      render(<AccountsContainer />);
    });

    const accountButton = screen.getAllByTestId('account-button')[0];
    fireEvent.click(accountButton);

    const exitButton = screen.getByTestId('exit-button');
    fireEvent.click(exitButton);
    
    const accountButtons = screen.getAllByTestId('account-button');
    expect(accountButtons.length).toBeGreaterThan(0);
  });
});