import React, { useReducer } from 'react';
import './Counter.css'; // CSS faylni import qilamiz

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1 className="title">Counter</h1>

      <div key={state.count} className="count animate">
        {state.count}
      </div>

      <div className="buttons">
        <button onClick={() => dispatch({ type: 'decrement' })}>- Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+ Increment</button>
      </div>
    </div>
  );
}

export default Counter;
