import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, editExpense } from './actions/expenses'
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters'
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';

const store = configureStore();

// store.subscribe(() => {
  // const state = store.getState();
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  // console.log(visibleExpenses);
// });

// store.dispatch(addExpense({
//   description: 'Water Bill',
//   amount: 30000,
//   createdAt: 10,
// }));

// store.dispatch(addExpense({
//   description: 'Gas Bill',
//   amount: 4000,
//   createdAt:2000
// }));

// store.dispatch(addExpense({
//   description: 'Electricity Bill',
//   amount: 1950000,
//   createdAt: 1000,
// }));

const jsx = (
  // <AppRouter />
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));
