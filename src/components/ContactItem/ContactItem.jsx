import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Item, Text } from './ContactItem.styled';
import { Delete } from 'components/Delete/Delete';
import { Edit } from 'components/Edit/Edit';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  const handleClick = ({ target: { name } }) => {
    setIsModalShown(true);
    setClickedButton(name);
  };
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" name="edit" onClick={handleClick}>
        Edit
      </Button>
      <Button type="button" name="delete" onClick={handleClick}>
        Delete
      </Button>
      {isModalShown && (
        <Modal onClose={setIsModalShown}>
          {clickedButton === 'edit' ? (
            <Edit
              id={id}
              name={name}
              number={number}
              onClose={setIsModalShown}
            />
          ) : (
            <Delete id={id} onClose={setIsModalShown} />
          )}
        </Modal>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
