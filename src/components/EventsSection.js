import React from "react";

const events = [
  {
    title: "Echoes of the Forest",
    date: "March 15, 2025",
    description: "An open-air party with DJs and forest ambient.",
  },
  {
    title: "Underground Sessions",
    date: "April 12, 2025",
    description: "A more intimate vibe with deep house and techno beats.",
  },
  {
    title: "Sunset Rave",
    date: "May 8, 2025",
    description: "Celebrate music and sunsets with an ocean view.",
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="events-section">
      <div className="container">
        <h3 className="section-title">Upcoming Events</h3>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;