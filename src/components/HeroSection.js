import React from 'react';
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Unleash the Music</h2>
          <p>
            Experience unforgettable events that blend music, lights, and vibes.
          </p>
          <a href="#events">
            <Button className="button">
              Explore Upcoming Events
            </Button>
          </a>
        </motion.div>
      </section>
  );
};

export default HeroSection;