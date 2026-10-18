/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";

export default function Footer() {
  return (
    <footer class="w-full border-t border-white/10 bg-slate-950 px-5 py-6">
      <div class="mx-auto max-w-6xl text-center">
        <p class="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} MrBook. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
