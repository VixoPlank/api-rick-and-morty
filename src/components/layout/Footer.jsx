import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-10 flex w-full flex-col items-center justify-between space-y-4 bg-zinc-800 px-8 py-3 text-white backdrop:blur-sm md:flex-row md:space-y-0">
      <div className="mx-auto md:mx-0">
        <Image
          width={160}
          height={47}
          src="/footer.webp"
          alt="Footer Logo"
          className="w-40"
        />
      </div>
      <nav className="flex space-x-6">
        <Link href="/planet" className="hover:text-gray-300">
          Planets
        </Link>
        <Link href="/favorites" className="hover:text-gray-300">
          Favorites
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
