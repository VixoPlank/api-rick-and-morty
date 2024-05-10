import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute min-h-full min-w-full object-cover"
        >
          <source src="/bg-home.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="absolute top-5 z-10 mx-auto transform">
        <Image
          width={384}
          height={121}
          src="/header.webp"
          alt="Logo"
          className="w-80 lg:w-96"
        />
      </div>

      <div className="z-10 ">
        <Image
          width={384}
          height={210}
          src="/car.webp"
          alt="Car"
          className=" w-80 lg:w-96"
        />
      </div>
    </main>
  );
}
