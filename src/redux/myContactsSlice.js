import { createSlice } from '@reduxjs/toolkit';

const myContactsSlice = createSlice({
  name: 'myContacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContacts(state, action) {
      state = [...state, action.payload];
      return state;
    },
    deleteContacts(state, action) {
      state = state.filter(c => c.id !== action.payload);
      return state;
    },
  },
});

export const { addContacts, deleteContacts } = myContactsSlice.actions;
export default myContactsSlice.reducer;
