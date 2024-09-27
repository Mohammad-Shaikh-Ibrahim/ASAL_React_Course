//First Way (New Way)
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter.jsx";
import authReducer from "./auth.jsx";

const store = configureStore({
    reducer: {
        counter:counterReducer,
        auth:authReducer
    }
});

export default store;

//another Way (Old Way)
//here we replace createStore by configureStore because at lastet version doesnt use
// import { createStore } from "redux";

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//         //don't do this:
//         // state.counter++
//         // return{
//         //     counter: state.counter,
//         //     showCounter: state.showCounter
//         // }
//         // or you forget the showCounter: state.showCounter at every return
//         // ** So always Copy and Create New Objects Dont Forget any thing
//         // vist to this link https://academind.com/tutorials/reference-vs-primitive-values/
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrease') {
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);

//export default store;