import Hero from './shared/Hero'
import MovieScroll from './shared/MovieScroll';

export default function Home() {
  return (
    <main className="p-8">
      <Hero />
      <MovieScroll genre="comedy" number={6}/>
      <MovieScroll genre="drama" number={6}/>
      <MovieScroll genre="horror" number={6}/>
      {/* <MovieScroll genre="action-adventure" number={3}/>
      <MovieScroll genre="animation" number={3}/>
      <MovieScroll genre="classic" number={3}/>
      <MovieScroll genre="family" number={3}/>
      <MovieScroll genre="mystery" number={3}/>
      <MovieScroll genre="scifi-fantasy" number={3}/>
      <MovieScroll genre="western" number={3}/> */}
    </main>
  );
};
