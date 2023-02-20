import { Button, Container, TextField } from '@mui/material';
import { Form, Wrapper } from 'pages/RegisterPage/RegisterPage.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/auth/auth.operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      await dispatch(authLogin({ email, password })).unwrap();
    } catch (error) {
      alert('Invalid email or password. Please try again');
    }
  };

  return (
    <Container>
      <Wrapper>
        <h2>Please Log In</h2>
        <Form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
