import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './../../components/Edit';
import expenses from './../fixtures/expenses';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpensePage 
    expense={expenses[0]}
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}/>
  );
});

test('should render Edit Expenses correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should edit an expense onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should remove an expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
});