const movies = [
  { 
    "id": 1,
    "title": "American Psycho", 
    "posterURL": "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "imdbId": "tt0144084"
  },
  {
    "id": 2,
    "title": "Lady Bird",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "imdbId": "tt4925292"
  },
  {
    "id": 3,
    "title": "Blade Runner",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "imdbId": "tt0083658"
  },
  {
    "id": 4,
    "title": "Eighth Grade",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
    "imdbId": "tt7014006"
  },
  {
    "id": 5,
    "title": "Coco",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    "imdbId": "tt2380307"
  },
]

export default function MovieScroll({ genre, number }) {
  return(
    <section className="text-gray-400">
      <div className="container px-5 py-12 mx-auto">
        <h2 className="capitalize font-medium title-font mb-4 text-gray-100 text-xl">{genre}</h2>
        <div className="flex flex-wrap -m-4">
          {movies.map(movie => (
            <div key={movie.id} className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="flex relative">
                <img src={movie.posterURL} alt={movie.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-700 bg-gray-800 opacity-0 hover:opacity-100 transition">
                  <h4 className="capitalize tracking-widest text-sm title-font font-medium text-amber-400 mb-1">
                    {genre}
                  </h4>
                  <h3 className="text-lg title-font font-medium text-gray-100 mb-1">
                    {movie.title}
                  </h3>
                  <a href={`https://imdb.com/title/${movie.imdbId}`}>Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
