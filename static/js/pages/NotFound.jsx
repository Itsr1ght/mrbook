/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";

import { useLocation } from "preact-iso";

export default function NotFound() {
  const { path } = useLocation();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-bold text-indigo-400">404</h1>

      <p className="mt-4 text-lg text-slate-400">Page not found: {path}</p>

      <a
        href="/"
        className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-500"
      >
        Go Home
      </a>
    </section>
  );
}
