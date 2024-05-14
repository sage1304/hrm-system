import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedComponent = (WrappedComponent) => {
 
  const AuthComponent = ({ isAuthenticated, ...rest }) => {
    return isAuthenticated ? (
      <WrappedComponent {...rest} />
    ) : (
      <Navigate to="/login" />
    );
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated
  });

  return connect(mapStateToProps, null)(AuthComponent);
};

export default AuthenticatedComponent;
