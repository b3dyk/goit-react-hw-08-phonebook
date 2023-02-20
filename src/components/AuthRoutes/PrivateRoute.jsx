import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';

export const PrivateRoute = () => {
  const token = useSelector(selectLoginToken);
  return token ? <Outlet /> : <Navigate to="login" replace />;
};
