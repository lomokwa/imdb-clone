import Link from "next/link";

const genres = [
  { title: "Comedy", slug: "comedy" },
  { title: "Drama", slug: "drama" },
  { title: "Action / Adventure", slug: "action-adventure" },
  { title: "Animation", slug: "animation" },
  { title: "Classic", slug: "horror" },
  { title: "Family", slug: "horror" },
  { title: "Mystery", slug: "horror" },
  { title: "Sci-fi / Fantasy", slug: "horror" },
  { title: "Western", slug: "horror" },
  { title: "Horror", slug: "horror" },
];

export default function Navbar() {
  return (
    <header class="text-gray-400 bg-gray-950 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-amber-400 mb-4 md:mb-0">
          MovieDB
        </Link>
        <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto">
          {genres.map((genre) => (
            <Link key={genre.slug} className="mr-5 hover:text-white" href={"/" + genre.slug}>
              {genre.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
