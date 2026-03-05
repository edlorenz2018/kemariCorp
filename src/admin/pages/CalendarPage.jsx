import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CalendarPage.css";

function CalendarPage() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const selectedDate = info.dateStr;

    // Count events for that date
    const eventsOnThatDay = events.filter(
      (event) => event.start === selectedDate
    );

    if (eventsOnThatDay.length >= 3) {
      alert("Maximum of 3 events allowed per day.");
      return;
    }

    const title = prompt("Enter Event Title:");
    if (title) {
      const newEvent = {
        title,
        start: selectedDate,
      };

      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="calendar-page">
      <h2>Service Calendar</h2>

      <div className="calendar-card">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          dateClick={handleDateClick}
          events={events}
          height="auto"
        />
      </div>
    </div>
  );
}

export default CalendarPage;