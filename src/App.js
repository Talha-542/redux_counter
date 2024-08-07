import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Action';
import './App.css';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <div>{count}</div>
      <div className="button-container">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
