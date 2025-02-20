import React from 'react';
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold">Unleash the Music</h2>
          <p className="mt-4 text-lg text-gray-300">
            Experience unforgettable events that blend music, lights, and vibes.
          </p>
          <Button className="mt-6 bg-pink-600 hover:bg-pink-700">
            Explore Upcoming Events
          </Button>
        </motion.div>
      </section>
  );
};

export default HeroSection;