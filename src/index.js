import React from "react";
import ReactDOM from "react-dom";

/**
 * Website Pages
 */
import Home from "./Component/Home";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
