import React from 'react';
import './App.scss';
import block from "bem-cn";

const b = block('app')

function App() {
  return (
    <div className={b()}>
      <h1>ui-kit-rollup</h1>
    </div>
  );
}

export default App;
