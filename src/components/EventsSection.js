import React from 'react';
import { Card, CardContent } from "../components/ui/Card";

const EventsSection = () => {
  return (
    <section id="events" className="event">
        <div className="container mx-auto">
          <h3>Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent>
                <h4>Echoes of the Forest</h4>
                <p className="text-gray-400">March 15, 2025</p>
                <p className="mt-2 text-gray-300">An open-air party with DJs and forest ambient.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4>Underground Sessions</h4>
                <p className="text-gray-400">April 12, 2025</p>
                <p className="mt-2 text-gray-300">A more intimate vibe with deep house and techno beats.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4>Sunset Rave</h4>
                <p className="text-gray-400">May 8, 2025</p>
                <p className="mt-2 text-gray-300">Celebrate music and sunsets with an ocean view.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export default EventsSection;