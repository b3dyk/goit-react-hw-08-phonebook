import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';

const HomePage = () => {
  const token = useSelector(selectLoginToken);
  return (
    <Container>
      <h1>Hello World!</h1>
      {!token && (
        <>
          <p>
            In order to use this app please <Link to="register">Register</Link>
          </p>
          <p>
            Or <Link to="login">Log In</Link> if you already have an account
          </p>
        </>
      )}
    </Container>
  );
};

export default HomePage;
