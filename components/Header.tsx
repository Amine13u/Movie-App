import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#254e58]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="/icon.png"
          width={70}
          height={70}
          className="cursor-pointer object-contain"
          alt="icon"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerItem">Home Page</li>
          <li className="headerItem">Movies</li>
          <li className="headerItem">Anime</li>
          <li className="headerItem">Trending</li>
          <li className="headerItem">My Favourites</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm text-[#726c5f]">
        <form className="relative hidden lg:inline">
          <button className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-6 w-6 absolute cursor-pointer" />
          </button>
          <input
            type="search"
            id="search"
            className="w-64 p-2 pl-10 text-sm rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Search your Favourite Show ..."
          />
        </form>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
