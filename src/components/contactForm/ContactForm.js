import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(target) => setName(target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(target) => setPhone(target.value)} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
      <input type="email" placeholder="Email" value={email} onChange={(target) => setEmail(target.value)} />
      <input type="submit" />
    </form>
  );
};
