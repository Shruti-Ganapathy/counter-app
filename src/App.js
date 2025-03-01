import React from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="counter-title">Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
