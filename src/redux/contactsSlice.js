import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const defaultArrayContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultArrayContacts,
  reducers: {
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== `${action.payload}`);
    },

    addContact: (state, action) => {
      const id = nanoid(3);
      const contactObj = { ...action.payload, id };
      state.push(contactObj);
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
