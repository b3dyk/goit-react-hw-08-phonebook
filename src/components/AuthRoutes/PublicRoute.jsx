import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';

export const PublicRoute = () => {
  const token = useSelector(selectLoginToken);
  return token ? <Navigate to="/" replace /> : <Outlet />;
};
