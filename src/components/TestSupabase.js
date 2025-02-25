import { useEffect, useState } from "react";
import supabase from "../services/supabase";

const TestSupabase = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold">It works!</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mt-2">
            <strong>{event.name}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestSupabase;