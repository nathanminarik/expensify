import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './../../components/Create';
import expenses from './../fixtures/expenses';

let wrapper, addExpense, history;


beforeEach(() => {
  addExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
});

test('should render Add Expense Page correctly.', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handleOnSubmit', () => {
  // const onSubmit = jest.fn();
  // const history = {push: jest.fn()};
  // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
})