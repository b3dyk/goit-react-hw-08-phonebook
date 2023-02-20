import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper } from './Delete.styled';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import { Button } from '@mui/material';

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
      <h4>Are you shure you want delete this buddy?</h4>
      <Wrapper>
        <Button variant="contained" color="error" onClick={handleDelete}>
          F@&k this c@#t!
        </Button>

        <Button variant="contained" onClick={handleClose}>
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
