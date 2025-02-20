import React from 'react';
import Button from "../components/ui/Button";


const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Get in Touch</h3>
          <p className="mt-4 text-gray-400">
            Have questions or want to collaborate? Reach out to us!
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
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <Button className="bg-pink-600 hover:bg-pink-700">Send Message</Button>
          </form>
        </div>
      </section>
  );
};

export default ContactSection;