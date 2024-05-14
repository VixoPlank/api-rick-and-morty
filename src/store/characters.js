import { create } from "zustand";
import axios from "axios";
import { getCharacterById } from "@/api/rickAndMorty";
import usePlanetsStore from "./planets";

const useCharactersStore = create((set, get) => ({
  characters: [],
  favorites: [],
  error: null,
  characterSelected: null,

  loadCharacters: async (characterEndpoints) => {
    try {
      const requests = characterEndpoints.map((endpoint) =>
        axios.get(endpoint),
      );
      const responses = await Promise.all(requests);
      const characters = responses.map((response) => response.data);
      set({ characters });
    } catch (error) {
      console.error(error);
      set({ error: "Error al cargar los personajes del planeta" });
    }
  },

  loadCharacterById: async (id) => {
    set({ characterSelected: null, error: null });
    try {
      const character = await getCharacterById(id);
      set({ characterSelected: character });
    } catch {
      set({ error: "Error al cargar el personaje específico" });
    }
  },

  loadFavorites: async (localFavorites) => {
    const parsedLocalFavorites = localFavorites && JSON.parse(localFavorites);
    if (!parsedLocalFavorites || parsedLocalFavorites.length === 0)
      return set({ favorites: null });

    const localFavoritesIds = parsedLocalFavorites.toString();
    const favorites = await getCharacterById(localFavoritesIds);
    if (!favorites || favorites.length === 0) {
      set({ favorites: null });
    } else {
      set({ favorites });
    }
  },

  addFavorites: (idCharacter) => {
    const { favorites } = get();
    const newFavorites = [...favorites, idCharacter];
    set({ favorites: newFavorites });
  },

  removeFavorites: (id) => {
    const { favorites } = get();
    const filteredFavorites = favorites.filter((c) => c.id !== id);
    set({ favorites: filteredFavorites });
  },
}));

export default useCharactersStore;
