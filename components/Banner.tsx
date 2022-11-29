import Image from "next/image";
import { useEffect, useState } from "react";
import { IMovie } from "../types";
import { baseUrl } from "../utils/movie";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

interface IProps {
  originalsMovies: IMovie[];
}

function Banner({ originalsMovies }: IProps) {
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    setMovie(
      originalsMovies[Math.floor(Math.random() * originalsMovies.length)]
    );

    const interval = setInterval(() => {
      setMovie(
        originalsMovies[Math.floor(Math.random() * originalsMovies.length)]
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [originalsMovies]);

  return (
    <div className="flex flex-col space-y-2 pt-48 justify-end md:space-y-4 lg:h-[65vh] ">
      <div className="absolute top-0 left-0 h-[85vh] w-full z-20">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="banner"
          className="object-cover"
          fill
        />
      </div>
      <div className="relative z-30 flex flex-col space-y-4 pt-10 pl-10">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
        <div className="flex flex-col space-y-1 md:space-x-3 md:flex-row md:items-center md:space-y-0">
          <button className="bannerBtn">
            <PlayIcon className="bannerIcon" />
            Play
          </button>
          <button className="bannerBtn">
            <InformationCircleIcon className="bannerIcon" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
