import React, {useState} from 'react';
import { supabase } from '../services/supabaseClient';
import Button from "../components/ui/Button";
import "../styles/ContactSection.css";


const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("subscribers").insert([formData]);

    if (error) {
      setMessage("Error: Email already registered.");
    } else {
      setMessage("You have successfully subscribed!");
      setFormData({ name: "", email: "" });

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Be the First to Know About Our Upcoming Events!</h3>
          <p className="mt-4 text-gray-400">Stay updated on our exclusive parties and events. Don’t miss out!</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="button">I Want to Stay Informed!</Button>
          </form>
          {message && <p className="text-green-400 mt-2">{message}</p>}
        </div>
      </section>
  );
};

export default ContactSection;