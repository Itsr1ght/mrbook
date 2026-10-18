/** @jsx h */

import { h } from "preact";
import { useLocation } from "preact-iso";

export default function Header() {
  const { path } = useLocation();

  const linkClass = (href) =>
    `text-sm transition ${
      path === href
        ? "font-semibold text-indigo-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header class="border-b border-white/10 bg-slate-900 sticky">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/" class="text-2xl font-bold text-white">
          Mr<span class="text-indigo-400">Book</span>
        </a>

        <div class="flex items-center gap-6">
          <a href="/" class={linkClass("/")}>
            Home
          </a>

          <a href="/books" class={linkClass("/books")}>
            Books
          </a>

          <a
            href="/login"
            class="rounded-lg bg-indigo-600 px-5 py-2 text-white"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
