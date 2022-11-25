import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-[140vh] bg-gradient-to-b from-[#112d32] to-[#88bdbc]">
      <Head>
        <title>Movieflex</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
