import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import requests from "../utils/request";
import { IMovie } from "../types";

interface IProps {
  originalsMovies: IMovie[];
  trendingNow: IMovie[];
  topRated: IMovie[];
  actionMovies: IMovie[];
  comedyMovies: IMovie[];
  horrorMovies: IMovie[];
  romanceMovies: IMovie[];
  documentaries: IMovie[];
}

const Home = ({
  originalsMovies,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: IProps) => {
  return (
    <div className="relative h-[140vh] bg-gradient-to-b from-[#112d32] to-[#88bdbc] z-10">
      <Head>
        <title>Movieflex</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner originalsMovies={originalsMovies} />
        <section></section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    originalsMovies,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchoriginalsMovies).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      originalsMovies: originalsMovies.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
