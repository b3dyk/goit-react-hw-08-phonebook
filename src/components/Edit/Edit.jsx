import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Wrapper } from './Edit.styled';
import { editContact } from 'redux/contacts/contacts.thunk';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export const Edit = ({ id, name, number, onClose }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setEditedName(value);
        break;

      case 'number':
        setEditedNumber(value);
        break;

      default:
        return;
    }
  };

  const handleClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose(false);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = { name: editedName, number: editedNumber };
    dispatch(editContact({ id, contact }));

    onClose(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        type="text"
        name="name"
        value={editedName}
        onChange={handleChange}
      />

      <TextField
        id="standard-basic"
        label="Number"
        variant="standard"
        type="tel"
        name="number"
        value={editedNumber}
        onChange={handleChange}
      />

      <Wrapper>
        <Button variant="contained" color="error" type="submit">
          Accept
        </Button>

        <Button variant="contained" type="button" onClick={handleClose}>
          Discard
        </Button>
      </Wrapper>
    </Form>
  );
};

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
