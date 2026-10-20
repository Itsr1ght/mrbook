/** @jsx h */
/** @jsxFrag Fragment */

/** @typedef {import("/static/js/types/Book.js").Book} Book */

import { h, Fragment } from "preact";
import { useLocation } from "preact-iso";

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
