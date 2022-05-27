import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const Home = () => {

    const wordVariants = {
      hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(148, 28, 31)",
      },
    };

  
    const community = ["Inquiries", "Applications"];

    const offers = [
      "We offer custom rates tailored to your needs.",
      "Your satisfaction is ours.",
      "We consider no task impossible.",
      "All work is to be returned in timely fashion.",
    ];

    const statement = `At CHILL, we are a small team offering an array of services geared towards all things creative. We help you put your dreams down on paper or welcome them into reality via the medium of your preference. Graphics, fabrics, garments, websites, videos, our team is kitted to provide whatever it is that you are looking for.`;


  return (
    <div>
      <motion.div className="content">
        <div className="words">
          {statement.split("").map((word, index) => {
            return (
              <motion.h1
                key={word + "-" + index}
                variants={wordVariants}
                whileHover="hover"
              >
                {`${word}`}
              </motion.h1>
            );
          })}
        </div>
        {offers.map((word, index) => {
          return (
            <motion.h3
              key={word + "-" + index}
              variants={wordVariants}
              whileHover="hover"
            >
              {`${word}`}
            </motion.h3>
          );
        })}

        <motion.h3></motion.h3>

        <motion.div className="commu">
          {community.map((word, index) => {
            return (
              <motion.h3
                key={word + "-" + index}
                variants={wordVariants}
                whileHover="hover"
                className="wordSmall"
              >
                {`${word}`}
              </motion.h3>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
