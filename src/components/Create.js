import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

// Refactored stateless component for better testing and avoiding inline function for onSubmit
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         // No longer needed since we're mapping dispatch to props
//         // props.dispatch(addExpense(expense));
//         props.onSubmit(expense);
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

const mapDispatchToProps = (dispatch) => ({
    addExpense: expense => dispatch(addExpense(expense))
  }
);

// the first argument to connect is mapStateToProps but we don't need that function in this file.
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
