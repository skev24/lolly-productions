import React from 'react';
import Button from "../components/ui/Button";
import "../styles/ContactSection.css";


const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Be the First to Know About Our Upcoming Events!</h3>
          <p className="mt-4 text-gray-400">
          Stay updated on our exclusive parties and events. Don’t miss out!
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            {/* <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            ></textarea> */}
            <Button className="button">I Want to Stay Informed!</Button>
          </form>
        </div>
      </section>
  );
};

export default ContactSection;