import { create } from "zustand";
import axios from "axios";
import {
  getPlanets,
  getPlanetById,
  getCharacterById,
} from "@/api/rickAndMorty";

const useStore = create((set) => ({
  planets: [],
  planetSelected: null,
  characters: [],
  error: null,

  loadPlanets: async () => {
    const data = await getPlanets();
    if (data) {
      set({ planets: data.results, error: null });
    } else {
      set({ error: "No se pudo cargar los planetas" });
    }
  },

  selectPlanet: async (id) => {
    set({
      planetSelected: null,
      characters: [],
      error: null,
      planetId: id,
    });
    const data = await getPlanetById(id);
    if (data) {
      set({ planetSelected: data, error: null });
      try {
        const charactersEndPointList = data.residents;
        const requests = await Promise.all(
          charactersEndPointList.map((endPoint) => {
            return axios.get(endPoint);
          }),
        );

        const characters = requests.map(({ data }) => {
          return data;
        });
        set({ characters });
      } catch (error) {
        console.log(error);
        set({ error: "Error al cargar los personajes del planeta" });
      }
    } else {
      set({ error: "Error al cargar detalles del planeta" });
    }
  },

  // cargarPersonajePorId: async (id) => {
  //   set({ personajeSeleccionado: null, error: null }); // Reiniciar el estado antes de la nueva carga
  //   const personaje = await getCharacterById(id);
  //   if (personaje) {
  //     set({ personajeSeleccionado: personaje });
  //   } else {
  //     set({ error: "Error al cargar el personaje específico" });
  //   }
  // },
}));

export default useStore;
