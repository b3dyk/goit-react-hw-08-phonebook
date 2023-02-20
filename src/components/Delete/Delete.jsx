import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, theme, Wrapper } from './Delete.styled';
import { ThemeProvider } from 'styled-components';
import { deleteContact } from 'redux/contacts/contacts.thunk';

export const Delete = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const handleClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));

    onClose(false);
  };
  return (
    <>
      <h5>Are you shure you want to delete this buddy?</h5>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <Button type="button" onClick={handleDelete}>
            F@&k this c@#t!
          </Button>
        </ThemeProvider>
        <Button type="button" onClick={handleClose}>
          Nah, it's fine
        </Button>
      </Wrapper>
    </>
  );
};

Delete.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
