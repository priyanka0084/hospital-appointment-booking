import React from "react";

const AppointmentList = ({ appointments, onCancel }) => {
  return (
    <div className="appointment-list">
      <h2>📋 Booked Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul>
          {appointments.map((appt, index) => (
            <li key={index}>
              <strong>{appt.patient}</strong> with {appt.doctor} <br />
              📅 {appt.date} ⏰ {appt.time}
              <button onClick={() => onCancel(index)}>Cancel</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
