import React, { useState } from "react";

const AppointmentForm = ({ onAdd }) => {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("Dr. Smith");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patient || !date || !time) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const newAppointment = { patient, doctor, date, time };
    onAdd(newAppointment);

    // Reset form
    setPatient("");
    setDoctor("Dr. Smith");
    setDate("");
    setTime("");
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient Name"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
      />

      <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
        <option>Dr. Smith</option>
        <option>Dr. Johnson</option>
        <option>Dr. Lee</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
        <option>02:00 PM</option>
        <option>03:00 PM</option>
      </select>

      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
