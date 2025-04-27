import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p className="no-contacts">No contacts to display.</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem
          key={contact.id}
          number={index + 1}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
