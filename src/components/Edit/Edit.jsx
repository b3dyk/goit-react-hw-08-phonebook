import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Wrapper } from './Edit.styled';
import { ThemeProvider } from 'styled-components';
import { editContact } from 'redux/contacts/contacts.thunk';
import { useState } from 'react';

Button.defaultProps = {
  theme: {
    main: '#45b6fe',
  },
};

const theme = {
  main: '#ff6242',
};

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={editedName}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={editedNumber}
          onChange={handleChange}
        />
      </label>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <Button>Edit</Button>
        </ThemeProvider>
        <Button type="button" onClick={handleClose}>
          Cancel
        </Button>
      </Wrapper>
    </form>
  );
};

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
