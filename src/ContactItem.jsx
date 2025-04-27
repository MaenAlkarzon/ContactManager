import React from 'react';

function ContactItem({ number, contact, deleteContact }) {
  return (
    <div className="contact-item">
      <div>
        <strong>{number}. {contact.name}</strong> - {contact.email}
      </div>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default ContactItem;
