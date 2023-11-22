import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MarvelCharacterSearch from './MarvelCharacterSearch';

describe('MarvelCharacterSearch component', () => {
  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.restore();
  });

  it('should display initial state without searching', async () => {
    const mockResponse = {
      data: {
        data: {
          results: [
            {
              id: 1,
              name: 'Spider-Man',
              thumbnail: {
                path: 'path/to/image',
                extension: 'jpg',
              },
            },
          ],
        },
      },
    };

    axiosMock.onGet(/characters/).reply(200, mockResponse);

    const { getByPlaceholderText, queryByText } = render(<MarvelCharacterSearch />);

    await waitFor(() => {
      expect(axiosMock.history.get.length).toBe(0);
    });

    expect(queryByText('Spider-Man')).toBeNull();
  
  });

  it('should display initial state without performing any search', async () => {
    const { queryByText } = render(<MarvelCharacterSearch />);
  
  
    await waitFor(() => {
      expect(axiosMock.history.get.length).toBe(0);
    });
  
    expect(queryByText('No characters found')).toBeNull();
  });
});
