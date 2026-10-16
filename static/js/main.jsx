/** @jsx h */

import { h, render } from "preact";
import { useLocation, Router, Route, LocationProvider } from "preact-iso";
import Home from "./pages/home";
import Books from "./pages/books";

function App() {
  const location = useLocation();

  return (
    <div>
      <Router>
        <Route path="/" component={<Home />} />
        <Route path="/books" component={<Books />} />
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
