import axios from 'axios';
import { useReducer, useState } from 'react';

const initState = {
  name: '',
  email: '',
  password: '',
};

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const JoinPage = () => {
  const [state, dispatch] = useReducer(formReducer, initState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const newUser = JSON.stringify(state);
    try {
      setIsLoading(true);

      await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        state
      );

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button>Sign In</button>
      </form>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default JoinPage;
