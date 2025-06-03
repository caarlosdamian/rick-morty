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

export const SelectedCharacterContext = createContext({});

export const SelectedCharacterContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [selectedCharacter, setSelectedCharacter] = useState<number>(1);
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
