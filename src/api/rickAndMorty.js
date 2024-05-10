import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getPlanets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/location`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los planetas:", error);
    return null;
  }
};

export const getPlanetById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/location/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el planeta especifico:", error);
    return null;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el personaje esperifico", error);
    return null;
  }
};
