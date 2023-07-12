export default function Page({ params: { genre }}) {
  return(
    <main className="p-8">
      <h1 className="capitalize text-2xl text-amber-400 font-semibold">
        {genre} Movies
      </h1>
    </main>
  );
};
