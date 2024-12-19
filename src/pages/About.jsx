import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="https://cdn.pixabay.com/video/2023/01/13/146336-789093861_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="centered-content">
        <h1>Welcome to BeatDHacker! 😎🙌</h1>
        <div>
        <motion.div
            className="context"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p> <strong>My Mission:</strong> I'm excited to introduce you to <strong>BeatDHacker</strong>! This project is something I truly enjoy working on. My goal is to raise global awareness about cybersecurity and hacking systems. Through this platform, I aim to provide resources for everyone, from beginners to advanced users, offering practical solutions to cybersecurity challenges.</p>
          </motion.div>

          <motion.div
            className="context"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay : 0.5}}
          >
            <p><strong>Inspiration:</strong> BeatDHacker was born from seeing too many casual device users fall victim to hacking due to a lack of technical knowledge. Inspired by the <strong>JS Mastery 1 Million Hackathon (huge congrats to Adrian!),</strong> I decided to create this platform to bridge the knowledge gap. Your feedback and thoughts are essential to shaping the future of BeatDHacker— <strong>let's build something great together</strong>.</p>

          </motion.div>

          <motion.div
            className="context"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p> <strong>Future Enhancements:</strong> I'm looking forward to adding some exciting new features based on your feedback:</p>
            <ul>
              <li><strong>In-Game Clubs:</strong> Connect with fellow cybersecurity enthusiasts.</li>
              <li><strong>Trophy Rewards:</strong> Earn badges and sharable certificates.</li>
              <li><strong>Online Competitions:</strong> Show off your skills in formats like 2v2 and 1v1.</li>
              <li><strong>UI Improvements:</strong> Continuously enhancing the user experience to make it more engaging and user-friendly.</li>
              <li><strong>More Updated Content:</strong> Increasing number of questions, challenges, and tutorials, providing users a better learning experience.</li>
            </ul>
          </motion.div>

          <motion.div
            className="context"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <p><strong>Data Safety:</strong> Your security is my top priority. You can trust that all shared data is securely protected and will never be disclosed without your permission.</p>
          </motion.div>

          <motion.div
            className="context"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <p><strong>Join Us!</strong> I hope you enjoy your experience with BeatDHacker and find it both informative and engaging. Together, we can make this platform even better. Your input is invaluable, and I look forward to hearing how <strong>WE</strong> can improve BeatDHacker with the power of our amazing community.</p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
