/** @jsx h */

import { h } from "preact";
import { useLocation } from "preact-iso";

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "/static/images/hobbit.jpg",
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    cover: "/static/images/dune.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    cover: "/static/images/1984.jpg",
  },
];

function BookCard({ book }) {
  const { route } = useLocation();

  return (
    <article
      onClick={() => route(`/books/${book.id}`)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-indigo-500 hover:shadow-lg"
    >
      <div className="flex aspect-3/4 items-center justify-center bg-slate-800 p-5">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-white">{book.title}</h2>

        <p className="mt-1 text-sm text-slate-400">{book.author}</p>
      </div>
    </article>
  );
}

export default function Books() {
  return (
    <section className="min-h-full bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Books</h1>

        <p className="mt-2 text-slate-400">Explore all available books.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
