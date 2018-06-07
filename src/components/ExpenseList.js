import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => {
  const displayExpenses = (expenses) => {
    return expenses.map((expense) => {
      return (
        <ExpenseListItem key={expense.id} {...expense} />
      )
    });
  }
  
  return (
    <div>
      { 
        props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          displayExpenses(props.expenses)
        )
      }
      {/* {props.filters.text} */}
      {  }
    </div>
  )
}

// We can grab whatever we want
const MapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(MapStateToProps)(ExpenseList)


// Alternative and original way.
// The first function takes infomation about the store (usually the state) and then returns and object that the component will have access too.
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)

// export default ConnectedExpenseList;