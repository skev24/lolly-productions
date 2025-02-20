import React from 'react';
import { Card, CardContent } from "../components/ui/Card";

const EventsSection = () => {
  return (
    <section id="events" className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent>
                <h4 className="text-xl font-bold">Neon Lights Festival</h4>
                <p className="text-gray-400">March 25, 2025</p>
                <p className="mt-2 text-gray-300">An open-air festival with top DJs and vibrant visuals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="text-xl font-bold">Underground Sessions</h4>
                <p className="text-gray-400">April 12, 2025</p>
                <p className="mt-2 text-gray-300">A more intimate vibe with deep house and techno beats.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="text-xl font-bold">Sunset Rave</h4>
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