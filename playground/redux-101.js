import { createStore } from 'redux';

// Action generators are functions that return action objects
// We will pass in an argument payload that takes a default blank object
// We need the empty object since we're accessing a property off it. And if the object is blank (i.e. nothing is passed in) we will get an error.

// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1,
// });

// By taking advantage of destructuring the code above we can simplify it.
// removing the need to check to see if the value exists since we can set a default.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: "RESET",
  count: 0
});

const setCount = ({count}) => ({
  type: "SET",
  count
})

// createStore take a function that is run each time. 
// That function takes an object, and then an action object that is passed to it with each dispach.

// Reducers are pure functions. 
// 1.a A pure function's output is determined by the input.
// 1.b It doesn't change anything outside of it's scope. Or take in anything from outside of its scope
// 2 never change state or action. (i.e. the input and the output)
const countReducer = (state = { count: 0 }, action) => {
  // This function is call every time dispach is called.
  // console.log('running')

  // We want to check the action type and then do different things based on what it is.
  switch (action.type) {
    case "INCREMENT":
      // We no longer need this const since we're handling it in the action generator
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy, 
      };
    case "DECREMENT":
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET": 
      return {
        count: action.count,
      }
    case "SET":
      return {
        count: action.count
      }

    default:
      return state
  }
}

// Create store takes a reducer
const store = createStore(countReducer);



// We will now take the function out and throw it into it's own function reducer above.
// const store = createStore((state = { count: 0 }, action) => {
//   // This function is call every time dispach is called.
//   // console.log('running')

//   // We want to check the action type and then do different things based on what it is.
//   switch (action.type) {
//     case "INCREMENT":
//       // We no longer need this const since we're handling it in the action generator
//       // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//       return {
//         count: state.count + action.incrementBy, 
//       };
//     case "DECREMENT":
//       // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
//       return {
//         count: state.count - action.decrementBy,
//       };
//     case "RESET": 
//       return {
//         count: action.count,
//       }
//     case "SET":
//       return {
//         count: action.count
//       }

//     default:
//       return state
//   }
// });

// console.log(store.getState());

// Subscribe gets called every time a store changes. It takes a function that is invoked each time.
// Instead of logging everything after each change we can subscribe to a store to see what's going on.
// If we want to unsubscribe we set it equal to a value returned from subscribe that we call whenever we are done.
// store.subscribe(() => console.log(store.getState()))
const sub = store.subscribe(() => console.log(store.getState()))
// sub()

// Actions - an object that gets sent to the store.
// like walk, stop_walking, sit, work, stop_working
// for us we'll want increment, decrement, reset_count

// I'd like to increment the count
// Dispach is a method that allows us to send an action object.
// Type is required
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });

// Using destructuring we will pass in an object
store.dispatch(incrementCount({
  incrementBy: 5
}));

// Instead of manually typing the object each time now, we will call the generator
// This makes it easier to avoid typos.
store.dispatch(incrementCount());

// store.dispatch({
//   type: 'INCREMENT'
// })
// console.log(store.getState());
// I'd like to decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 100 }));
// console.log(store.getState());

// I'd like to reset the count to 0
store.dispatch(resetCount());
// console.log(store.getState()); 

// I'd like to set a count
store.dispatch(setCount({ count: 101 }));
