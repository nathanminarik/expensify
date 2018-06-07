import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'; // named imports can be found here: https://reacttraining.com/react-router/web/guides/philosophy
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>This is from my dashboard component</div>
const ExpenseCreatePage = () => <div>This is from my create component</div>
const ExpenseEditPage = () => <div>This is from my edit component</div>
const ExpenseHelpPage = () => <div>This is from my help component</div>
// We don't want to do this since we don't need to talk to the server.
// Instead we'll import link from react-router-dom
// const ExpenseNotFound = () => <div>404 - Page not found. <a href="/">Go Home</a></div>
const ExpenseNotFound = () => <div>404 - Page not found. <Link to="/">Go Home</Link></div>

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="isActive" exact={true} to="/">Home</NavLink>
    <NavLink activeClassName="isActive" to="/create">Create</NavLink>
    <NavLink activeClassName="isActive" to="/edit">Edit</NavLink>
    <NavLink activeClassName="isActive" to="/help">Help</NavLink>
  </header>
)

// This is a way to do nav with just Link. NavLink let's us style the nav better with active, etc...
// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     <Link to="/">Home</Link>
//     <Link to="/create">Create</Link>
//     <Link to="/edit">Edit</Link>
//     <Link to="/help">Help</Link>
//   </header>
// )

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      {/* Switch will look through the routes in order and stop at a match */}
      <Switch>
        {/* Exact will prevent the home route from loading on each matching route (since every route would match /) */}
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route path='/create' component={ExpenseCreatePage}/>
        <Route path='/edit' component={ExpenseEditPage}/>
        <Route path='/help' component={ExpenseHelpPage}/>
        {/* If you remove the path prop, it will always match */}
        <Route component={ExpenseNotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
  // This version is previous to the 404 which requires switch
  // <BrowserRouter>
  //   {/* Browser router expects on child, so we need to wrap in a div if we have multiple routes  */}
  //   <div>
  //     {/* Exact will prevent the home route from loading on each matching route (since every route would match /) */}
  //     <Route path='/' component={ExpenseDashboardPage} exact={true}/>
  //     <Route path='/create' component={ExpenseCreatePage}/>
  //     <Route path='/edit' component={ExpenseEditPage}/>
  //     <Route path='/help' component={ExpenseHelpPage}/>
  //     <Route component={ExpenseNotFound}/>
  //   </div>
  // </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
