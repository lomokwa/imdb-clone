export default function MovieCard({ movie, genre}) {
  return(
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="flex relative">
        <img src={movie.posterURL} alt={movie.title} className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-700 bg-gray-800 opacity-0 hover:opacity-100 transition">
          <h4 className="capitalize tracking-widest text-sm title-font font-medium text-amber-400 mb-1">
            {genre}
          </h4>
          <h3 className="text-lg title-font font-medium text-gray-100 mb-1">
            {movie.title}
          </h3>
          <a href={`https://imdb.com/title/${movie.imdbId}`} target="_blank" rel="noreferrer">Learn More</a>
        </div>
      </div>
  </div>
  )
}