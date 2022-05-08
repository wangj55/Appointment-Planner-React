import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="DEFAULT" disabled>
        Select a contact
      </option>
      {contacts.map((contact) => {
        return (
          <option key={contact} value={contact}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
