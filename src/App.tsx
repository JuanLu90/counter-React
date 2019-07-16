import React from "react";
import "./App.css";
import Counter from "./components/counterWithSetInterval";
import CounterSetTimeOut from "./components/counterWithSetTimeOut";

const App: React.FC = () => {
  return (
    <>
      <Counter />
      <CounterSetTimeOut />
    </>
  );
};

export default App;
