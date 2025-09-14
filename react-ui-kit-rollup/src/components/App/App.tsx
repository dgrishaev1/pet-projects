import React from "react";
import "./App.scss";
import block from "bem-cn";
import Button from "../Button/Button";

const b = block("app");

const App = () => {
  return (
    <div className={b()}>
      <h1>ui-kit-rollup</h1>
      <Button>button</Button>
    </div>
  );
};

export default App;
