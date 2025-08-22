import React, { useState, useEffect } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import "./styles.css";

const App = () => {
  const [appointments, setAppointments] = useState([]);

  // Load saved appointments from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(saved);
  }, []);

  // Save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter((appt, index) => index !== id));
  };

  return (
    <div className="app-container">
      <h1>🏥 Hospital Appointment Booking</h1>
      <h3>Total Appointments: {appointments.length}</h3>
      <AppointmentForm onAdd={addAppointment} />
      <AppointmentList appointments={appointments} onCancel={cancelAppointment} />
    </div>
  );
};

export default App;
