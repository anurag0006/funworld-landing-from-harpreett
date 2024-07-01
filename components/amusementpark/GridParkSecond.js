"use client";
import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
export default function GridParkSecond ({ data }) {
    const [hover, setHover] = useState({
      bool: false,
      index: null,
      place: "",
    });
  
    const handleMouseEnter = (index, place) => {
      setHover({
        bool: true,
        index: index,
        place: place,
      });
    };
  
    const handleMouseLeave = (index, place) => {
      setHover({
        bool: false,
        index: null,
        place: "",
      });
    };
  
    return (
      <div className=" mx-auto grid md:grid-cols-3 max-md:grid-cols-2 xl:w-[75%] md:w-[90%]">
        {data.map((upper, index) => {
          return (
            <Box
              key={index}
              className={`w-auto flex group hover:bg-gradient-to-r hover:from-[#FFB200] hover:to-[#F26702]  flex-col items-center justify-center md:min-h-[350px] py-4 lg:min-h-[400px] ${
                index % 2 === 0 ? "max-md:border-r-[1px]" : ""
              } ${index !== 4 && index !== 5 ? "max-md:border-b-[1px]" : ""} ${
                index === 0 || index === 1 || index === 2
                  ? "md:border-b-[1px]"
                  : ""
              } ${
                index !== 2 && index !== 5
                  ? "md:border-r-[1px] border-gray-300"
                  : ""
              }`}
            >
              {upper.icon}
              <Typography
                variant="h5"
                className="text-center max-md:text-lg w-[80%] mx-auto mt-4 group-hover:text-white"
              >
                {upper.head}
              </Typography>
              <Typography
                variant="subtitle1"
                className="w-[80%] max-md:text-sm mx-auto text-center mt-4 group-hover:text-white"
              >
                {upper.content}
              </Typography>
            </Box>
          );
        })}
      </div>
    );
  };
  
