/** @jsx h */

import { loadJSX } from "/static/js/jsx-loader.js";
import { h, render } from "preact";
import { Router, Route, LocationProvider } from "preact-iso";

// Shared components
const { default: Header } = await loadJSX("/static/js/components/Header.jsx");
const { default: Footer } = await loadJSX("/static/js/components/Footer.jsx");

// Pages
const { default: Home } = await loadJSX("/static/js/pages/Home.jsx");
const { default: Books } = await loadJSX("/static/js/pages/Books.jsx");
const { default: NotFound } = await loadJSX("/static/js/pages/NotFound.jsx");

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
  document.getElementById("app"),
);
