import React from 'react';
import Button from "../components/ui/Button";
import styles from '../styles/HeroSection.module.css';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.h2}>Unleash the Music</h2>
          <p className={styles.p}>
            Experience unforgettable events that blend music, lights, and vibes.
          </p>
          <a href="#events">
            <Button className={styles.button}>
              Explore Upcoming Events
            </Button>
          </a>
        </motion.div>
      </section>
  );
};

export default HeroSection;