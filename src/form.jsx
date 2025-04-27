import React, { useState } from 'react';

function ContactForm({ addContact }) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addContact({ username, email });
    setName('');
    setEmail('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
