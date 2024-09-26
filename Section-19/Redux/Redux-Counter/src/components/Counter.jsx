// import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

// Functional Components

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handledecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleToggleCounter = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handledecrement}>decrement</button>
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
