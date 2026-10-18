/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useLocation } from "preact-iso";

const featuredBooks = [
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
      class="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
      onClick={() => route(`/books/${book.id}`)}
    >
      <div class="flex aspect-3/4 items-center justify-center bg-slate-100 p-5 dark:bg-slate-800">
        <img
          src={book.cover}
          alt={book.title}
          class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div class="p-4">
        <h3 class="truncate font-semibold text-slate-900 dark:text-white">
          {book.title}
        </h3>
        <p class="mt-1 truncate text-sm text-slate-500">
          {book.author}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const { route } = useLocation();

  function handleSearch(event) {
    event.preventDefault();

    if (!search.trim()) return;

    route(`/books?search=${encodeURIComponent(search.trim())}`);
  }

  return (
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section class="bg-slate-900 px-5 py-20 text-center sm:py-28">
        <div class="mx-auto max-w-3xl">
          <p class="mb-5 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Your personal digital library
          </p>

          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Discover your next
            <span class="block text-indigo-400">
              great read.
            </span>
          </h1>

          <p class="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore amazing books, discover new authors,
            and enjoy reading all in one place.
          </p>

          <form
            onSubmit={handleSearch}
            class="mx-auto mt-10 flex max-w-xl gap-2 rounded-xl bg-white p-2 shadow-xl"
          >
            <input
              type="search"
              placeholder="Search books or authors..."
              value={search}
              onInput={(e) => setSearch(e.currentTarget.value)}
              class="min-w-0 flex-1 px-4 py-2 text-slate-900 outline-none"
            />

            <button
              type="submit"
              class="w-fit rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Books */}
      <section class="mx-auto max-w-6xl px-5 py-16">
        <div class="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
              Explore books
            </h2>
            <p class="mt-2 text-sm text-slate-500">
              Discover something worth reading.
            </p>
          </div>

          <a
            href="/books"
            class="whitespace-nowrap text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            View all →
          </a>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
