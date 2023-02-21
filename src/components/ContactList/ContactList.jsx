import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contacts.thunk';
import { Loader } from 'components/Loader/Loader';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>Oops, something went wrong</p>}
      {!error && (
        <List>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
      {isLoading && <Loader />}
    </>
  );
};
