"use client";

import Image from "next/image";

const Page = () => {
  const noFavoritesMessage = (
    <p className="mt-5 text-center text-3xl text-white lg:px-72">
      No parece haber nada que mostrar aquí por el momento, si ves un personaje
      que quieres añadir a favoritos, haz clic en la estrella blanca para verlo
      aquí.
    </p>
  );
  return (
    <section className="flex flex-col items-center">
      <header>
        <figure className="mx-auto mt-11 w-80 object-cover lg:w-96">
          <Image
            width={384}
            height={132}
            src="/favorites.webp"
            alt="Favorites"
          />
        </figure>
      </header>
      {/* <article className="mt-7 ">
        <button className="group relative flex h-max w-max flex-row items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#86f54e] p-2  text-gray-700 transition-all duration-200 focus:overflow-visible">
          <figure className="size-10">
            <Image width={40} height={42} src="/neptuno.webp" alt="" />
          </figure>
          <span className="text-lg font-bold">Buscar por Planeta</span>
          <svg
            className="size-8 rotate-90  group-focus:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
            />
          </svg>
          <div className="absolute -bottom-40 left-0 flex h-max w-full flex-col gap-2 rounded-lg bg-[#86f54e] p-2 shadow-lg">
            <span className="flex flex-row items-center gap-2 rounded-lg p-2 font-semibold hover:bg-[#78de45]">
              <p>Light</p>
            </span>
            <span className="flex flex-row items-center gap-2 rounded-lg p-2 font-semibold hover:bg-[#78de45]">
              <p>Dark</p>
            </span>
            <span className="flex flex-row items-center gap-2 rounded-lg p-2 font-semibold hover:bg-[#78de45]">
              <p>System</p>
            </span>
          </div>
        </button>
      </article> */}

      {noFavoritesMessage}
    </section>
  );
};

export default Page;
