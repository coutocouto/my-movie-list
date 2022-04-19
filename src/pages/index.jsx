import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../../config";

export default function Home ({ movies }) {
  return (
    <div className="bg-white">
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps () {
  const result = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = result.data;

  return {
    props: { movies }
  }
}