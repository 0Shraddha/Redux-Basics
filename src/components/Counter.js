import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  // Use useDispatch to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Access the counter value from the Redux store
  // Use useSelector to get the current state
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5});
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }

  const toggleCounterHandler = () => {
    dispatch({type : 'toggler'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
