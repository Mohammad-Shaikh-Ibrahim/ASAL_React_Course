const redux = require("redux");

//Reducer Function
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latesState = store.getState();
  console.log(latesState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
