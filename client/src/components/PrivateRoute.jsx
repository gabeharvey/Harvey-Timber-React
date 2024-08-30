import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Check if the user is authenticated
  if (isAuthenticated) {
    // If user is authenticated and trying to access login or signup pages, redirect to home
    if (window.location.pathname === '/login' || window.location.pathname === '/signup') {
      return <Navigate to="/" />;
    }
    // If user is authenticated and trying to access a private route, allow access
    return children;
  }

  // If user is not authenticated, redirect to login page
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
