/** @jsx h */

import { loadJSX } from "/static/js/jsx-loader.js";
import { h, render } from "preact";
import { useLocation, Router, Route, LocationProvider } from "preact-iso";
const { default: Home } = await loadJSX("/static/js/pages/home.jsx");
const { default: Books } = await loadJSX("/static/js/pages/books.jsx");

function App() {
  const location = useLocation();

  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/books" component={Books} />
      </Router>

      <p>Current path: {location.path}</p>
    </div>
  );
}

render(
  <LocationProvider>
    <App />
  </LocationProvider>,
  document.getElementById("app"),
);
