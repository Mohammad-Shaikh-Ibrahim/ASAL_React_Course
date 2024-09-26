import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

// Functional Components

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };
  const handleIncrease = () => {
    dispatch({ type: 'increase', amount: 5 });
  };
  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };
  const handleDecrease = () => {
    dispatch({ type: 'decrease', amount: 5 });
  };

  const handleToggleCounter = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase By 5</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleDecrease}>Decrease By 5</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// import { Component } from 'react';
// import { useSelector, useDispatch, connect } from 'react-redux';
// Class Components

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//    };

//   handledecrement() {
//     this.props.decrement();
//    };

//   handleToggleCounter() { };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handledecrement.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.handleToggleCounter}>Toggle Counter</button>
//       </main>
//     );
//   }

// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'edcrement' }),
//   };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
