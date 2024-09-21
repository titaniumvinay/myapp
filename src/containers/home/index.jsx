import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_textwrap">
        <h1>
          Hello, I'm Vinay Nayak.
          <br />
          Front End Developer
        </h1>
      </div>
      <motion.div
        className="home__contact-me"
        initial={{ y: '50vh', opacity: 0 }}  // Start from below the center
        animate={{ y: 0, opacity: 1 }}       // Move to center and fade in
        transition={{ duration: 1.5, delay: 1 }} // Animation duration and delay
      >
        <button onClick={handleNavigateToContactMePage}>CONNECT WITH ME</button>
      </motion.div>
    </section>
  );
};

export default Home;
