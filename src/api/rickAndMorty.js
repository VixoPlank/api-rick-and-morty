import { axiosClient } from "@/lib/axiosClient";

export const getPlanets = async () => {
  try {
    const response = await axiosClient.get("/location");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los planetas:", error);
    return null;
  }
};

export const getPlanetById = async (id) => {
  try {
    const response = await axiosClient.get(`/location/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el planeta especifico:", error);
    return null;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axiosClient.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el personaje esperifico", error);
    return null;
  }
};
