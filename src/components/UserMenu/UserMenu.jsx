import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/auth/auth.operations';
import { selectLoginToken } from 'redux/auth/auth.selectors';
import { Text, Thumb } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectLoginToken);

  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <Thumb>
      <Text>
        Hello, <b>{token.user.name}</b>
      </Text>
      <Text>{token.user.email}</Text>

      <Button
        variant="outlined"
        color="error"
        type="button"
        size="small"
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </Thumb>
  );
};
