import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Logo from "./imgs/chill.png";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(148, 28, 31)",
    },
  };




  return (
    <div>
      <div className="logoCon">
        <img src={Logo} alt="" className="logo" />
      </div>
      <Home />
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        whileInView="hover"
      ></motion.div>
    </div>
  );
}

export default App;
