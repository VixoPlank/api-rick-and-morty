import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { getCharacterById } from "@/api/rickAndMorty";

const useCharactersStore = create(
  persist(
    (set, get) => ({
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

      toggleFavorite: (character) => {
        const { favorites } = get();
        if (
          favorites.some(
            (currentCharacter) => character.id === currentCharacter.id,
          )
        ) {
          set({
            favorites: favorites.filter((fav) => fav.id !== character.id),
          });
        } else {
          set({ favorites: [...favorites, character] });
        }
      },
    }),
    { name: "character-store" },
  ),
);

export default useCharactersStore;
