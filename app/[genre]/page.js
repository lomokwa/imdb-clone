import MovieScroll from "../shared/MovieScroll";

export function generateStaticParams() {
  return[
    { genre: "comedy" },
    { genre: "drama" },
    { genre: "horror" }
  ];
};

export function generateMetadata({ params: { genre } }) {
  return{
    title: `My ${genre} Movie Database`,
    description: `${genre} movies fetched from SampleAPIs`,
  }
}

export default function Page({ params: { genre }}) {
  return(
    <main className="p-8">
      <h1 className="capitalize text-2xl text-amber-400 font-semibold">
        {genre} Movies
      </h1>
      <MovieScroll genre={genre} number={12} />
    </main>
  );
};
