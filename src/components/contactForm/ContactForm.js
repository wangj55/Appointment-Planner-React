import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
