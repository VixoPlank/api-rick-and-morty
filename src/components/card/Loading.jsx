import Image from "next/image";

const Loading = () => {
  return (
    <main className="flex items-center justify-center py-10 lg:py-28">
      <Image src="/loading.gif" alt="Cargando" width={300} height={300} />
    </main>
  );
};

export default Loading;
