import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/filter/filter.slice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) =>
    dispatch(filterContactsAction(value));

  return (
    <TextField
      id="standard-basic"
      label="Search by name"
      variant="standard"
      type="text"
      name="search"
      value={filter}
      onChange={handleChange}
    />
  );
};
