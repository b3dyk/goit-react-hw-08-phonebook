import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BtnThumb, Item, Text } from './ContactItem.styled';
import { Delete } from 'components/Delete/Delete';
import { Edit } from 'components/Edit/Edit';
import { Modal } from 'components/Modal/Modal';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ContactItem = ({ id, name, number }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  const handleClick = ({ currentTarget: { name } }) => {
    setIsModalShown(true);
    setClickedButton(name);
  };
  return (
    <>
      <Item>
        <Text>
          {name}: {number}
        </Text>
        <BtnThumb>
          <IconButton aria-label="edit" name="edit" onClick={handleClick}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            name="delete"
            onClick={handleClick}
          >
            <DeleteIcon />
          </IconButton>
        </BtnThumb>
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
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
