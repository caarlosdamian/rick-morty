import React from 'react';
import { Character } from 'rickmortyapi';
import { CardLike } from './CardLike';
import { fireEvent, render, screen } from '@/tests/test-utils';
import { addFavorite } from '@/lib/features/characters/charactersSlice';


const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: '' },
  location: { name: 'Earth (Replacement Dimension)', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: '',
  created: '',
};

jest.mock('@/lib/features/characters/charactersSlice', () => ({
  ...jest.requireActual('@/lib/features/characters/charactersSlice'),
  addFavorite: jest.fn((character) => ({
    type: 'characters/addFavorite',
    payload: character,
  })),
}));

describe('CardLike', () => {
  it('dispatches addFavorite action on click', () => {
    render(<CardLike character={mockCharacter as Character} active={false} />);

    const container =
      screen.getByRole('button', { hidden: true }) ||
      screen.getByText(/like/i).parentElement;

    expect(container).toBeInTheDocument();

    fireEvent.click(container!);

    expect(addFavorite).toHaveBeenCalledWith(mockCharacter);
  });

  it('applies active class when active prop is true', () => {
    render(<CardLike character={mockCharacter as Character} active={true} />);
    const svg = screen.getByRole('img', { hidden: true });

    expect(svg).toHaveClass('active');
  });
});
