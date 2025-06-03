import { getCharacterById } from '@/lib/services/characters';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  use,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Character } from 'rickmortyapi';

interface ContextI {
  selectedCharacter: number;
  setSelectedCharacter: Dispatch<SetStateAction<number>>;
  selectedCharacterData: Character;
}

interface Props extends PropsWithChildren {
  characters: Character[];
}
export const SelectedCharacterContext = createContext({});

export const SelectedCharacterContextProvider = ({
  children,
  characters,
}: Props) => {
  const [selectedCharacter, setSelectedCharacter] = useState<number>(() =>
    characters?.length !== 0 ? characters[0].id : 1
  );

  useEffect(() => {
    setSelectedCharacter(() =>
      characters?.length !== 0 ? characters[0].id : 1
    );
  }, [characters]);

  const [selectedCharacterData, setSelectedCharacterData] = useState<
    Character | undefined
  >();

  const fetchInfo = useCallback(async () => {
    const data = (await getCharacterById(selectedCharacter)) as Character;
    setSelectedCharacterData(data);
  }, [selectedCharacter, setSelectedCharacterData]);

  useEffect(() => {
    fetchInfo();
  }, [selectedCharacter, fetchInfo]);

  return (
    <SelectedCharacterContext.Provider
      value={{
        selectedCharacter,
        setSelectedCharacter,
        selectedCharacterData,
      }}
    >
      {children}
    </SelectedCharacterContext.Provider>
  );
};

export const useSelectedCharacterContext = (): ContextI => {
  const context = use(SelectedCharacterContext);
  if (!context) {
    throw new Error('Need provider');
  }
  return context as ContextI;
};
