import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";


const EventsSection = () => {
  const [events, setEvents] = useState([]); // storage info of bd
  const [selectedImage, setSelectedImage] = useState(null); // State for modal image

  // get info of the event from DB
  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("title, date, description, location, image_url"); 

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle click to open image modal
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="events" className="events-section">
      <div className="container">
        <h3 className="section-title">Upcoming Events</h3>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card" onClick={() => handleImageClick(event.image_url)}>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-location"><span className="mr-1">📍</span>{event.location}</p>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>✖</button>
            <img src={selectedImage} alt="Event" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;