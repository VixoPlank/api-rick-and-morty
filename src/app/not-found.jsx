import Header from "@/components/layout/Header";
import Image from "next/image";
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="mb-32 flex flex-col items-center text-white">
        <header>
          <h1 className="mt-14 text-center text-5xl font-bold lg:text-7xl">
            Error 404
          </h1>
        </header>
        <div className="mx-28 flex flex-col px-20 lg:mt-6 lg:flex-row lg:items-center">
          <p className="text-3xl leading-snug lg:text-6xl ">
            No te preocupes mi amigo, no es un pene alienígena... Dale la vuelta
            al pepinillo.
          </p>

          <Image
            width={288}
            height={407}
            src="/pickle-rick.webp"
            alt="Pepinillo Rick!"
            className="w-full object-cover lg:w-72"
          />
        </div>
      </div>
    </>
  );
}
