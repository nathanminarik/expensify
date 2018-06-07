import { createStore } from 'redux';

// createStore take a function that is run each time. 
// That function takes an object, and then an action object that is passed to it with each dispach.
const store = createStore((state = { count: 0 }, action) => {
  // This function is call every time dispach is called.
  // console.log('running')

  // We want to check the action type and then do different things based on what it is.
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy, 
      };
    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy,
      };
    case "RESET": 
      return {
        count: 0,
      }
    case "SET":
      return {
        count: action.count
      }

    default:
      return state
  }
});

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
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5,
});

store.dispatch({
  type: 'INCREMENT'
})
// console.log(store.getState());
// I'd like to decrement the count
store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10,
})
// console.log(store.getState());

// I'd like to reset the count to 0
store.dispatch({
  type: 'RESET'
})
// console.log(store.getState()); 

// I'd like to set a count
store.dispatch({
  type: 'SET',
  count: 101
})
