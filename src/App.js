import React, { useState } from 'react';
import ContactForm from './form';
import ContactList from './ContactList';
import './Css/stylee.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
