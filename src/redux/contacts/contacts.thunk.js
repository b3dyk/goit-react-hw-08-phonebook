import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, token } from 'http/http';
import { selectLoginToken } from 'redux/auth/auth.selectors';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectLoginToken(getState());

    if (!stateToken) {
      return rejectWithValue();
    }

    try {
      token.set(stateToken.token);
      const { data } = await privateApi.get('/contacts');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.post('/contacts', {
        name,
        number,
      });

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, contact }, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.patch(`/contacts/${id}`, contact);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
