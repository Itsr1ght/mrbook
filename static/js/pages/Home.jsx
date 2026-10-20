/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useLocation } from "preact-iso";

export default function Home() {
  const [search, setSearch] = useState("");
  const { route } = useLocation();

  function handleSearch(event) {
    event.preventDefault();

    if (!search.trim()) return;

    route(`/books?search=${encodeURIComponent(search.trim())}`);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-slate-900 px-5 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Your personal digital library
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Discover your next
            <span className="block text-indigo-400">great read.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore amazing books, discover new authors, and enjoy reading all
            in one place.
          </p>

          <form
            onSubmit={handleSearch}
            className="mx-auto mt-10 flex max-w-xl gap-2 rounded-xl bg-white p-2 shadow-xl"
          >
            <input
              type="search"
              placeholder="Search books or authors..."
              value={search}
              onInput={(e) => setSearch(e.currentTarget.value)}
              className="min-w-0 flex-1 px-4 py-2 text-slate-900 outline-none"
            />

            <button
              type="submit"
              className="w-fit rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
