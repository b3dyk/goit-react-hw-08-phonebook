import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/filter/filter.slice';
import { selectFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) =>
    dispatch(filterContactsAction(value));

  return (
    <Input
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
