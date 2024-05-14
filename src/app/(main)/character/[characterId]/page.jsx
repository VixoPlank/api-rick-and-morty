"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useCharactersStore from "@/store/characters";
import usePlanetsStore from "@/store/planets";

const Page = ({ params: { characterId } }) => {
  const { characterSelected, loadCharacterById } = useCharactersStore();
  const { planetId } = usePlanetsStore();

  useEffect(() => {
    loadCharacterById(characterId);
  }, [loadCharacterById, characterId]);

  return (
    <section className="mx-4 mb-40 mt-16 flex flex-col items-center gap-5 rounded-3xl bg-gray-200 p-5 text-gray-700 lg:mx-auto lg:my-3 lg:w-max lg:flex-row lg:items-stretch lg:gap-8 lg:p-8">
      {/* Portal */}
      {/* <figure className="absolute right-0 top-0 h-52 w-96 -translate-y-12 translate-x-36  object-cover">
        <Image src="/portal.gif" alt="portal gif" fill />
      </figure> */}
      {/* Imagen */}
      <div>
        <figure className="relative h-64 w-80 overflow-hidden rounded-3xl object-cover lg:h-full lg:w-[500px] lg:border-4 lg:border-gray-700">
          <Image
            src={characterSelected?.image}
            alt={`Imagen de ${characterSelected?.name}`}
            fill
          />
        </figure>
      </div>

      {/* Detalles */}
      <div className="flex flex-col justify-between gap-y-6">
        <article className="flex flex-col items-start rounded-3xl bg-[#86f54e] p-10 lg:h-[380px] lg:w-[374px] lg:items-start lg:border-2 lg:border-gray-700">
          <header>
            <h2 className="text-3xl font-bold lg:max-w-11 lg:text-5xl ">
              {characterSelected?.name}
            </h2>
          </header>
          {/* linea */}
          <div className="mx-auto my-6 h-[2px] w-28 bg-gray-700 lg:mx-0 lg:h-1 lg:w-36"></div>
          <ul>
            <li>
              <strong>Status:</strong> {characterSelected?.status}
            </li>

            <li>
              <strong>Species:</strong> {characterSelected?.species}
            </li>

            <li>
              <strong>Type: </strong> {characterSelected?.type}
            </li>

            <li>
              <strong>Gender: </strong>
              {characterSelected?.gender}
            </li>

            <li>
              <strong>Origin:</strong> {characterSelected?.origin.name}
            </li>
          </ul>
        </article>
        <div className="rounded-3xl bg-[#86f54e] p-7 text-center">
          <Link href={`/planet/${planetId}`}>Back to Planet</Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
