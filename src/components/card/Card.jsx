import Image from "next/image";
import Link from "next/link";
import Star from "@/components/icons/Star";
import { useEffect, useState } from "react";
import { addFavorite, isFavorite, removeFavorite } from "@/utils/favorites";

const Card = ({ character }) => {
  const { id, name, status, image } = character;
  const [markedAsFavorite, setMarkedAsFavorite] = useState(false);

  const markAsFavorite = () => {
    if (!isFavorite(id)) addFavorite(id);
    else removeFavorite(id);
    setMarkedAsFavorite((x) => !x);
  };

  useEffect(() => {
    if (isFavorite(id)) setMarkedAsFavorite(true);
  }, [id]);

  return (
    <section className="mb-32 flex flex-col items-center lg:mb-0 lg:flex-row lg:justify-center">
      <div className=" mt-4 flex w-[280px] flex-col overflow-hidden rounded-lg shadow lg:mb-40 lg:mt-16">
        <figure className="relative h-72 w-full">
          <Image
            className="rounded-t-lg"
            src={image}
            alt={`Imagen del personaje: ${name}`}
            fill
          />
        </figure>

        <button
          className="absolute translate-x-2 translate-y-2 rounded-full border-lime-600 bg-gray-900 p-2 shadow-2xl"
          onClick={markAsFavorite}
        >
          <Star active={markedAsFavorite} />
        </button>

        <Link
          className="absolute translate-x-52 translate-y-64 rounded-full border-4 border-lime-600 bg-gray-900 p-4 shadow-2xl"
          href={`/character/${id}`}
          shallow={true}
        >
          GO
        </Link>

        <div className="bg-[#86f54e] p-5 tracking-tight text-gray-900 [&>h3]:text-lg [&>h3]:font-bold">
          <h3>Name:</h3>
          <p>{name}</p>
          <h3>Status:</h3>
          <p>{status}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
