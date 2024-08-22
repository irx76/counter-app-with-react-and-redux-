import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';

function App() {

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

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
        <button className="button" onClick={()=> dispatch(increment()) }>Increment</button>
        <button className="button" onClick={()=> dispatch(decrement()) }>Decrement</button>
        <button className="button" onClick={()=> dispatch(incrementByAmount(2)) }>incrementBy2</button>
      </div>

      </header>
    </div>
  );
}

export default App;
