import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
const isRefreshing = useSelector(selectIsRefreshing)

const isAuthenticated = isLoggedIn && !isRefreshing;

  return isAuthenticated  ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;