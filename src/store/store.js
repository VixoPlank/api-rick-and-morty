import { create } from "zustand";
import axios from "axios";
import {
  obtenerPlanetas,
  obtenerPlanetaPorId,
  obtenerPersonajePorId,
} from "@/api/rickAndMorty";

const useStore = create((set) => ({
  planetas: [],
  planetaSeleccionado: null,
  personajes: [],
  error: null,

  cargarPlanetas: async () => {
    const data = await obtenerPlanetas();
    if (data) {
      set({ planetas: data.results, error: null });
    } else {
      set({ error: "No se pudo cargar los planetas" });
    }
  },

  seleccionarPlaneta: async (id) => {
    set({
      planetaSeleccionado: null,
      personajes: [],
      error: null,
      planetId: id,
    });
    const data = await obtenerPlanetaPorId(id);
    if (data) {
      set({ planetaSeleccionado: data, error: null });
      try {
        const personajesEndPointList = data.residents;
        const peticiones = await Promise.all(
          personajesEndPointList.map((endPoint) => {
            return axios.get(endPoint);
          }),
        );

        const personajes = peticiones.map(({ data }) => {
          return data;
        });
        set({ personajes });
      } catch (error) {
        console.log(error);
        set({ error: "Error al cargar los personajes del planeta" });
      }
    } else {
      set({ error: "Error al cargar detalles del planeta" });
    }
  },

  cargarPersonajePorId: async (id) => {
    set({ personajeSeleccionado: null, error: null }); // Reiniciar el estado antes de la nueva carga
    const personaje = await obtenerPersonajePorId(id);
    if (personaje) {
      set({ personajeSeleccionado: personaje });
    } else {
      set({ error: "Error al cargar el personaje específico" });
    }
  },
}));

export default useStore;
