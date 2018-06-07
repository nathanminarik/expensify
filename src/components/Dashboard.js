import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const Dashboard = () => (
  <div>
    <p>This is from my dashboard component</p>
    <ExpenseListFilter />
    <ExpenseList />
  </div>

)

export default Dashboard;