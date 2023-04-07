import { useState } from 'react';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const onFormData = data => {
    const dataNameLowerCase = data.name.toLowerCase().trim();

    if (
      contacts.find(el => dataNameLowerCase === el.name.toLowerCase().trim())
    ) {
      alert(`Contact was added`);
      return;
    }

    const id = nanoid(3);
    data = { ...data, id };

    dispatch(addContact(data));

    // ! const todosSlice = createSlice({
    //   name: 'todos',
    //   initialState: [],
    //   reducers: {
    //     addTodo: {
    //       reducer: (state, action) => {
    //         state.push(action.payload);
    //       },
    //       prepare: text => {
    //         const id = nanoid();
    //         return { payload: { id, text } };
    //       },
    //     },
    //   },
    // });
  };

  const onFilterControl = value => {
    setFilter(value);
  };

  const onFilterSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onFormData={onFormData} />

      <h2>Contacts</h2>
      <Filter onFilterControl={onFilterControl} />
      <Contacts contacts={onFilterSearch()} />
    </div>
  );
}
