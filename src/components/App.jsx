import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="" element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="" element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
