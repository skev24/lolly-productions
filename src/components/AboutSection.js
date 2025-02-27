import React from 'react';
import '../styles/AboutSection.css'

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center">About Lolly Productions</h3>
          <p className="mt-6 text-center text-gray-400">
          We are dedicated to organizing unique electronic music events inspired by the roots of the genre. At Lolly Productions, every detail counts—bringing people together through music, lights, and unforgettable energy.
          <br /> <br />
          This project was born in 2025 after three years of organizing parties and events with friends, featuring different themes such as Halloween, summer pool parties, and year-end celebrations. While our main focus is electronic music, we are also open to creating events with other themes, always striving to deliver memorable experiences. Over time, we decided to take the project in a more professional direction, leveraging each team member’s unique skills.
          </p>
        </div>
      </section>
  );
};

export default AboutSection;