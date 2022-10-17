import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MainPage from 'pages/MainPage';
import userEvent from '@testing-library/user-event';

const results = {
  docs: [
    {
      _id: '5cd99d4bde30eff6ebccfcf9',
      height: '',
      race: 'Human',
      gender: 'Male',
      birth: 'TA 1967',
      spouse: 'Unknown, probably as he had descendants',
      death: 'Unknown, sometime after ,TA 2000',
      realm: '',
      hair: '',
      name: 'Fram',
      wikiUrl: 'http://lotr.wikia.com//wiki/Fram',
    },
    {
      _id: '5cd99d4bde30eff6ebccfcf8',
      height: '',
      race: 'Human',
      gender: 'Male',
      birth: 'TA 2698',
      spouse: 'Unnamed wife',
      death: 'TA 2754',
      realm: '',
      hair: 'Dark',
      name: 'Freca',
      wikiUrl: 'http://lotr.wikia.com//wiki/Freca',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc4d',
      height: '',
      race: 'Hobbit',
      gender: 'Male',
      birth: 'TA 2980',
      spouse: 'unknown, possibly unmarried',
      death: 'Early ,Fourth Age',
      realm: '',
      hair: '',
      name: 'Fredegar Bolger',
      wikiUrl: 'http://lotr.wikia.com//wiki/Fredegar_Bolger',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc15',
      height: '1.06m (3\'6")',
      race: 'Hobbit',
      gender: 'Male',
      birth: '22 September ,TA 2968',
      spouse: '',
      death: 'Unknown (Last sighting ,September 29 ,3021,) (,SR 1421,)',
      realm: '',
      hair: 'Brown',
      name: 'Frodo Baggins',
      wikiUrl: 'http://lotr.wikia.com//wiki/Frodo_Baggins',
    },
  ],
  total: 15,
  limit: 10,
  offset: 0,
  page: 1,
  pages: 2,
};

describe('Main page', () => {
  it('should find and show card', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results),
      })
    );

    const { getByTestId } = render(<MainPage />);
    const search = getByTestId('search-input');
    const button = getByTestId('search-button');

    userEvent.type(search, 'frodo baggins');
    fireEvent.click(button);

    expect(await screen.findByText(/frodo baggin/i)).toBeInTheDocument();
  });

  it('should show message if not found', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ docs: [] }),
      })
    );

    const { getByTestId } = render(<MainPage />);
    const search = getByTestId('search-input');
    const button = getByTestId('search-button');

    userEvent.type(search, 'qwerty');
    fireEvent.click(button);

    expect(await screen.findByText(/nothing found/i)).toBeInTheDocument();
  });

  it('should show loader', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results),
      })
    );
    const { getByTestId } = render(<MainPage />);
    const search = getByTestId('search-input');
    const button = getByTestId('search-button');

    userEvent.type(search, 'frodo');
    fireEvent.click(button);

    expect(await screen.findByText(/loading.../i)).toBeInTheDocument();
  });
});
