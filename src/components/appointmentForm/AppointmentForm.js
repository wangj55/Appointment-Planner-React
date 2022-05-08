import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <ContactPicker
        contacts={getContactNames()}
        value={contact}
        onChange={({ target }) => setContact(target.value)}
      />
      <input
        placeholder="date"
        type="date"
        value={date}
        onChange={({ target }) => setDate(target.value)}
        min={getTodayString()}
      />
      <input
        placeholder="time"
        type="time"
        value={time}
        onChange={({ target }) => setTime(target.value)}
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
