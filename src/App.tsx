import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
