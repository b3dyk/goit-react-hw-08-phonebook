import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span></span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <label>
        <span></span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
