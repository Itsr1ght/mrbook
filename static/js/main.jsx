/** @jsx h */

import { h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello Preact!</h1>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

render(<App />, document.getElementById("app"));
