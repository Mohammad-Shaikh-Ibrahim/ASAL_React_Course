import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
        //don't do this:
        // state.counter++
        // return{
        //     counter: state.counter,
        //     showCounter: state.showCounter
        // }
        // or you forget the showCounter: state.showCounter at every return 
        // ** So always Copy and Create New Objects Dont Forget any thing
        // vist to this link https://academind.com/tutorials/reference-vs-primitive-values/
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrease') {
        return {
            counter: state.counter - action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;