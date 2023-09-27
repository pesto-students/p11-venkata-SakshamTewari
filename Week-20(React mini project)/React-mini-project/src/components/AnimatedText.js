import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import "./AnimatedText.css";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < words.length - 1) {
        setIndex(index + 1);
      }
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, [index, words.length]);

  return (
    <div>
      {words.map((word, i) => (
        <Transition key={i} in={i <= index} timeout={500}>
          {(state) => (
            <span className={`word ${state === "entered" ? "appear" : ""}`}>
              {word}{" "}
            </span>
          )}
        </Transition>
      ))}
    </div>
  );
};

export default AnimatedText;
