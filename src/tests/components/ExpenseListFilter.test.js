import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from './../../components/ExpenseListFilter';
import { filters, altFilters } from './../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let wrapper,
  sortByAmount,
  sortByDate,
  setTextFilter,
  setEndDate,
  setStartDate;

beforeEach(() => {
  sortByAmount = jest.fn()
  sortByDate = jest.fn()
  setTextFilter = jest.fn()
  setEndDate = jest.fn()
  setStartDate = jest.fn()
  wrapper = shallow(<ExpenseListFilter 
    filters={filters}
    setTextFilter={setTextFilter}
    setEndDate={setEndDate}
    setStartDate={setStartDate}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
  />)
});

test('should render Expense List Filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render Expense List Filters with altData correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle a text change', () => {
  const value = 'Test'
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  
  wrapper.setProps({
    filters: altFilters
  });
  
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';

  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(1, 'day');
  const endDate = moment(0).add(3, 'day');
  wrapper.find(DateRangePicker).prop('onDatesChange')({ endDate, startDate });

  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle calendar focus', () => {
  const calendarFocused = 'endDate'
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});