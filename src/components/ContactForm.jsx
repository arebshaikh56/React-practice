import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Form</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
