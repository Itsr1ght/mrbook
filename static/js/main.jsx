/** @jsx h */

import { loadJSX } from "/static/js/jsx-loader.js";
import { h, render } from "preact";
import {
  useLocation,
  Router,
  Route,
  LocationProvider,
} from "preact-iso";

// Shared components
const { default: Header } = await loadJSX("/static/js/components/Header.jsx");
const { default: Footer } = await loadJSX("/static/js/components/Footer.jsx");

// Pages
const { default: Home } = await loadJSX("/static/js/pages/Home.jsx");
const { default: Books } = await loadJSX("/static/js/pages/Books.jsx");

// 404 Page
function NotFound() {
  const { path } = useLocation();

  return (
    <section class="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 class="text-6xl font-bold text-indigo-400">404</h1>

      <p class="mt-4 text-lg text-slate-400">
        Page not found: {path}
      </p>

      <a
        href="/"
        class="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-500"
      >
        Go Home
      </a>
    </section>
  );
}

// App layout + routing
function App() {
  return (
    <div class="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />

      <main class="flex-1">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route default component={NotFound} />
        </Router>
      </main>

      <Footer />
    </div>
  );
}

render(
  <LocationProvider>
    <App />
  </LocationProvider>,
  document.getElementById("app")
);
