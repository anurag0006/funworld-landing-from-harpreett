"use client";
import React from "react";
import { animated, useInView } from "@react-spring/web";
import Rides from "../Rides/Rides";
function Animation({ridesArray}) {
  const [ref, props] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));

  return (
    <div>
      <animated.div
        className="w-full min-h-screen grid grid-flow-row grid-cols-3 gap-4 max-md:grid-cols-2 max-xs:grid-cols-1 "
        ref={ref}
        style={props}
      >
        {ridesArray && ridesArray?.map((ride, index) => {
          return (
            <Rides
              key={index}
              img={ride?.img}
              num={ride?.num}
              text={ride?.text}
              index={index}
            />
          );
        })}
      </animated.div>
    </div>
  );
}

export default Animation;
