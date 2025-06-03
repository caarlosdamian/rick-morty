import { Character, getCharacter } from 'rickmortyapi';

export const getCharacterById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8000/character/${id}`);

    if (!response.ok) {
      const { data } = await getCharacter(id);

      postCharacter(data);
      return data;
    }

    const res = await response.json();

    return res;
  } catch (error) {
    console.error(error);
  }
};

export const postCharacter = async (data: Character) => {
  try {
    const response = await fetch(`http://localhost:8000/character`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    return res;
  } catch (error) {
    console.error(error);
  }
};
