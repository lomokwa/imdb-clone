export default function Hero() {
  return(
    <section className="text-gray-400 bg-gray-950 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex flex-col mb-16 items-center text-center md:items-start md:text-left md:mb-0 md:pr-16 md:w-1/2 lg:pr-24 lg:flex-grow">
          <h1 className="title-font text-gray-100 font-medium text-3xl mb-4 sm:text-4xl">Fight Club</h1>
          <p className="mb-8 leading-relaxed">A depressed man suffering from insomnia meets a strange salesman named Tyler Durden and finds himself living in a dirty house after his perfect apartment is destroyed. The pair forms a club with strict rules where men fight. The perfect partnership is compromised when a woman, Marla, catches Tyler's attention.</p>
          <a href="https://www.imdb.com/title/tt0137523/" target="_blank" rel="noreferrer" className="text-white bg-amber-500 border-0 py-2 px-6 rounded hover:bg-amber-400 hover:text-gray-950">Learn More</a>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="object-cover object-center rounded" alt="Fight Club Poster" src="https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg" />
        </div>
      </div>
    </section>
  );
};
