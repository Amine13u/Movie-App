import Image from "next/image";
import { IMovie } from "../types";

interface IProps {
  movie: IMovie;
}

function Thumbnail({ movie }: IProps) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        alt="movie_poster"
        fill
      />
    </div>
  );
}

export default Thumbnail;
