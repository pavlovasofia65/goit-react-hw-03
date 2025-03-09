import { useState, useEffect } from 'react'
import './App.css'

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

function App() {
  const [contacts, setContacts] = useState( () => {
  const savedInfo = window.localStorage.getItem('contacts');
  return savedInfo ? JSON.parse(savedInfo) : 
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
});

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
  const [inputValue, setInputValue] = useState('');

  const filtCont = contacts.filter(contact => 
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(cont => cont.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={inputValue} onChange={setInputValue}/>
      <ContactList contacts={filtCont} onDelete={delContact}/>
    </div>
  )
}

export default App