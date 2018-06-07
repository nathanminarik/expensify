import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// We want to set a reducer for each root property in our redux store
// Here we have filters, and expenses

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'amount'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE': 
      return state.filter((expense) => {
        return expense.id !== action.id
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default: 
      return state;
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE': 
      return {
        ...state,
        sortBy: action.sortBy
      };
    case 'SORT_BY_AMOUNT': 
      return {
        ...state,
        sortBy: action.sortBy
      };
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        }
    default: 
      return state;
  }
}

// Get visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
    // sort can take a comparison function that allows you to handle a few more edge cases.
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
  // return expenses
}


// This will show the default state for the store as an empty array, but we want that on taht on the expenses property, so we want to use combineReducer.
// const store = createStore(expensesReducer);
// console.log(store.getState())
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}));

store.subscribe(() => {
  // console.log(store.getState());

  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 200,
  createdAt: -1000
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'coffee',
  amount: 300,
  createdAt: 1000
}));

const expenseThree = store.dispatch(addExpense({
  description: 'cheese',
  amount: 100,
}));

// store.dispatch(removeExpense({
//   id: expenseOne.expense.id
// }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));

const demoState = {
  expenses: [
    {
      id: 'slkdjnfw',
      description: 'Jan rent',
      optionalNote: 'This was the final payment for the address',
      amountPaid: 54500,
      createdAt: 0,
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}


// Spread object
// const user = {
//   name: 'Nathan',
//   age: 33
// }

// // You can override  properties by redeclaring them. If you put the age above though it will be the age from the spread object.
// console.log({
//   age: 27,
//   ...user,
//   location: 'Gainesville',
// })
