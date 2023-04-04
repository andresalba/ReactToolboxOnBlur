import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <br/>
      <h1>Focus and defocus to increment the counter</h1>
      <br/>
      Enter your name: &nbsp;
      <input onBlur={() => setCount(count + 1)}></input>
      <br/>
      Count state is: &nbsp;
      {count}
    </div>
  );
}

export default App;
