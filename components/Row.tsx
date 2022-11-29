import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { IMovie } from "../types";
import Thumbnail from "./Thumbnail";

interface IProps {
  title: string;
  movies: IMovie[];
}

function Row({ title, movies }: IProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleArrowClick = (direction: string) => {
    setIsScrolled(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-lg font-semibold text-[#56534d] transition duration-200 hover:text-[#45423d] md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`rowIcon left-2 ${!isScrolled && "hidden"}`}
          onClick={() => handleArrowClick("left")}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 "
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="rowIcon right-2"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
