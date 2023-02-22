import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { contactsInitState } from './contacts.init-state';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.items[index] = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          editContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
