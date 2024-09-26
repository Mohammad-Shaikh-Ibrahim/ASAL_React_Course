const redux = require("redux");

//Reducer Function
const counterReducer = (state = { counter: 0 }, action) => {
  if(action.type === "increment"){
    return {
    counter: state.counter + 1,
    };
  }
  if(action.type === "decrement"){
    return {
    counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latesState = store.getState();
  console.log(latesState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });