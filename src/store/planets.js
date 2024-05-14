import { create } from "zustand";
import { getPlanets, getPlanetById } from "@/api/rickAndMorty";
import useCharactersStore from "./characters";

const usePlanetsStore = create((set) => ({
  planets: [],
  planetSelected: null,
  error: null,
  planetId: null,
  loadPlanets: async () => {
    try {
      const data = await getPlanets();
      set({ planets: data.results, error: null });
    } catch {
      set({ error: "No se pudo cargar los planetas" });
    }
  },

  selectPlanet: async (id) => {
    set({ planetSelected: null, error: null, planetId: null });
    const data = await getPlanetById(id);
    if (data) {
      set({ planetSelected: data, error: null, planetId: id });
      useCharactersStore.getState().loadCharacters(data.residents); // Llamar a loadCharacters desde useCharactersStore
    } else {
      set({ error: "Error al cargar detalles del planeta" });
    }
  },
}));

export default usePlanetsStore;
