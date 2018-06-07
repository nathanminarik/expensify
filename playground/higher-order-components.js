// Higher order component
// A component that renders another component
// Reuse code
// Render Hijacking
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  )
}

// By wrapping the component we are able to conditionally render it.
const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAdmin && <p>This is private info. Please don't share</p>}
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

const requireAuth = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated ? (
          <WrappedComponent {...props}/>
        ) : (
          <p>Please log in.</p>
        )}
      </div>
    )
  }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the info" />, document.getElementById('app'));