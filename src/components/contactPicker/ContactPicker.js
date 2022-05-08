import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option key={1} value="not selected" selected="selected">
        Select a contact
      </option>
      {contacts.map((contact, index) => {
        <option key={index + 1} value={contact.name}></option>;
      })}
    </select>
  );
};
