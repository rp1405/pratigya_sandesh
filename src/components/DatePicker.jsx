import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { makeDate, makeDate2 } from "./date";
function DatePicker({ setParamDate }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(makeDate2(selectedDate));
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setShowCalendar(false); // Hide calendar after selecting a date
    setDisplayDate(makeDate2(newDate));
    setParamDate(makeDate(newDate));
    console.log(paramDate);
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    outline: "none",
    display: "flex",
    alignItems: "center", // Center icon vertically
    justifyContent: "center", // Center icon horizontally
  };

  const calendarContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "4px",
    width: "80%",
    maxWidth: "400px",
    margin: "0 auto", // Center the container horizontally
    display: showCalendar ? "block" : "none",
  };
  const outerDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const dateDiv = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  const labelStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    color: "white",
    backgroundColor: "black",
    borderRadius: "6px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  };
  const paramDate = makeDate(selectedDate);
  return (
    <div style={outerDiv}>
      <div style={dateDiv}>
        <label style={labelStyle}>{displayDate}</label>
        <button onClick={toggleCalendar} style={buttonStyle}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.33333C0 0.597178 0.597178 0 1.33333 0H14.6667C15.4028 0 16 0.597178 16 1.33333V14.6667C16 15.4028 15.4028 16 14.6667 16H1.33333C0.597178 16 0 15.4028 0 14.6667V1.33333ZM1.33333 1.33333V14.6667H14.6667V1.33333H1.33333Z"
              fill="white"
            />
            <path
              d="M11.6667 0.666504V3.99984H4.33333V0.666504H11.6667Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div style={calendarContainerStyle}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default DatePicker;
