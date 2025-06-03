export const getCharacterById = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:8000/${id}`);
    const response = res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
