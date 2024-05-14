"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPlanets } from "@/api/rickAndMorty";
// import {} from "@/store/store";
import Loading from "@/components/card/Loading";
import "@/styles/button.css";

const Page = () => {
  const [planets, setPlanets] = useState([]);
  const [indexActual, setIndexActual] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPlanets = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await getPlanets();
        setPlanets(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al cargar los planetas:", error);
        setIsLoading(false);
      }
    };
    loadPlanets();
  }, []);

  const nextPlanet = () => {
    setIndexActual((preIndex) => (preIndex + 1) % planets.length);
  };

  const previousPlanet = () => {
    setIndexActual((preIndex) =>
      preIndex === 0 ? planets.length - 1 : preIndex - 1,
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <header className="text-center text-5xl text-[#86f54e]">
        <h1>Select a Planet!</h1>
      </header>
      <figure>
        <Image src="/portal.gif" alt="portal gif" width={480} height={270} />
      </figure>
      <div className="text-center">
        {planets.length > 0 ? (
          <div>
            <div>
              <p className="pb-6 text-center text-5xl text-[#86f54e]">
                Planet:
              </p>
              <Link
                href={`/planet/${planets[indexActual].id}`}
                className="text-center text-xl text-gray-100 hover:text-gray-300 "
              >
                {planets[indexActual].name}
              </Link>
            </div>

            <div className="my-7 mb-36 space-x-8 text-center lg:mb-0">
              <button onClick={previousPlanet} className="btn">
                Previous
              </button>
              <button onClick={nextPlanet} className="btn">
                Next
              </button>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default Page;
