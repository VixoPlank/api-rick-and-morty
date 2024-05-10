import Image from "next/image";

const Page = () => {
  return (
    <section className="flex flex-col items-center">
      <header>
        <figure>
          <Image
            width={320}
            height={106}
            src="/about.webp"
            alt="img-about"
            className="mx-auto mt-11 w-80 object-cover"
          />
        </figure>
      </header>

      <p className="mt-5 flex text-center text-3xl text-white lg:px-72 ">
        Your are talking about Inception? Wubba lubba dub dub! This is not Game
        of Thrones, Morty. Awwww thankss your preferences better that way. Plus,
        if you get in kind of a cool enough relationship, you can sort of follow
        each bies for 25 schmeckles!
      </p>
      <p className="mb-40 pt-5 text-4xl text-lime-400 lg:mb-0">
        correo@correo.com
      </p>
    </section>
  );
};

export default Page;
