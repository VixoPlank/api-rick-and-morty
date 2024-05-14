"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import usePlanetsStore from "@/store/planets";
import Carrousel from "@/components/card/Carrousel";
import Loading from "@/components/card/Loading";

const PlanetDetails = ({ params: { planetId } }) => {
  const selectPlanet = usePlanetsStore((state) => state.selectPlanet);
  const planet = usePlanetsStore((state) => state.planetSelected);
  const error = usePlanetsStore((state) => state.error);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      setIsLoading(true);
      await selectPlanet(planetId);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    cargarDatos();
  }, [planetId, selectPlanet]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="text-white">
      <article className="flex flex-col items-center lg:flex-row lg:justify-center">
        <figure className="relative h-96 w-[700px] ">
          <Link href="./">
            <Image src="/portal.gif" alt="portal gif" fill />
          </Link>
        </figure>
        <div className="[&>h3]:font-bold [&>p]:pl-5">
          <h3>Planet: </h3>
          <p>{planet.name}</p>
          <h3>Type: </h3>
          <p>{planet.type}</p>
          <h3>Dimension: </h3>
          <p>{planet.dimension}</p>
          <h3>Created: </h3>
          <p>{planet.created}</p>
        </div>
      </article>

      <article>
        <Carrousel />
      </article>
    </section>
  );
};

export default PlanetDetails;
