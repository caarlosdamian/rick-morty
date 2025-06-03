/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Card } from './Card';
import { Character } from 'rickmortyapi';
import { fireEvent, render, screen } from '@/tests/test-utils';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

let mockContextValue: unknown;

jest.mock('../../context/selectedCharacterContext', () => ({
  useSelectedCharacterContext: () => mockContextValue,
}));

describe('Card', () => {
  const mockSetSelectedCharacter = jest.fn();

  const mockCharacter: Character = {
    id: 42,
    name: 'Rick Sanchez',
    image: 'https://example.com/rick.png',
  } as Character;

  beforeEach(() => {
    jest.clearAllMocks();

    mockContextValue = {
      selectedCharacter: null,
      setSelectedCharacter: mockSetSelectedCharacter,
      selectedCharacterData: mockCharacter,
      characters: [mockCharacter],
    };
  });

  it('renders the first name of the character', () => {
    render(<Card character={mockCharacter} fav={false} />);
    expect(screen.getByText('Rick')).toBeInTheDocument();
  });

  it('calls setSelectedCharacter when clicked', () => {
    render(<Card character={mockCharacter} fav={false} />);
    const card = screen.getByText('Rick').closest('div');
    fireEvent.click(card!);
    expect(mockSetSelectedCharacter).toHaveBeenCalledWith(mockCharacter.id);
  });

  it('adds selected class if character is selected', () => {
    // @ts-expect-error
    mockContextValue.selectedCharacter = 42;
    const { container } = render(
      <Card character={mockCharacter} fav={false} />
    );
    const cardContainer = container.firstChild as HTMLElement;
    expect(cardContainer.className).toMatch(/card_selected/);
  });
});

