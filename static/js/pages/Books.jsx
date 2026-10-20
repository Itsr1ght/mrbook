/** @jsx h */

/** @typedef {import("/static/js/types/Book.js").Book} Book */

import { loadJSX } from "/static/js/jsx-loader.js";
import { h } from "preact";
import { useState } from "preact/hooks";

const { default: BookCard } = await loadJSX(
  "/static/js/components/BookCard.jsx",
);

export default function Books() {
  /**
   * @type {[Book[], Function]}
   */
  const [books, setBooks] = useState([]);

  return (
    <section className="min-h-full bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Books</h1>
        {books.length === 0 ? (
          <div className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              No books in your library yet
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              Your library is waiting for its first book. Add one to get
              started.
            </p>

            <a
              href="/books/add"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Add your first book
            </a>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
