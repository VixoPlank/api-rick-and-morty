import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="z-10 mt-3 flex w-full items-center justify-between px-4">
      <div className="flex w-full justify-center lg:w-auto lg:justify-start">
        <Image
          width={256}
          height={70}
          src="/logo.webp"
          alt=""
          className="w-64 "
        />
      </div>
      <nav className="hidden space-x-12 pr-3 text-2xl text-[#86f54e] lg:flex">
        <Link href="/planet">Planets</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
