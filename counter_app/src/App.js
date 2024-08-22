import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter App</h1>
      <div className="counter">
        <p>
          The count is : {count}
        </p>
      </div>
      <div className="buttons">
        <button className="button" onClick={()=> setCount(count+1)}>Increment</button>
        <button className="button" onClick={()=> setCount(count-1)}>Decrement</button>
      </div>

      </header>
    </div>
  );
}

export default App;
