import HomePage from 'pages/HomePage/HomePage';
import JoinPage from 'pages/JoinPage/JoinPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="phonebook" element={<PhonebookPage />} />
      </Route>
    </Routes>
  );
};
