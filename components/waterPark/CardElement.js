"use client";
import React from "react";
import { useState } from "react";
import {
  Box,
  Card,
  Rating,
  Typography,
} from "@mui/material";
import { FaQuoteRight } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
function CardElement({ data })  {
    const [value, setValue] = useState(null);
  
    return (
      <div className="flex flex-col lg:flex-row max-md:h-[100%] h-[100%] w-[90%] justify-between mx-auto mt-10 gap-8">
        {data.map((e, index) => {
          return (
            <Card
              key={index}
              elevation={4}
              className="flex flex-col md:w-[80%] mx-auto lg:w-[35%] rounded-lg max-md:py-4 max-lg:h-[30%]"
            >
              <Box
                sx={{ display: "flex" }}
                className="w-[80%]  flex gap-2 mx-auto md:mt-5"
              >
                <div>
                  {e.rating == 5 ? (
                    <FcBusinesswoman size={35} />
                  ) : (
                    <FcManager size={35} />
                  )}
                  {/* <Image src={user} width={60} height={60} className='border rounded-[3rem] h-[60px] w-[60px]' alt='pic' /> */}
                </div>
                <div className="">
                  <Typography variant="h6" className="font-bold">
                    {e.name}
                  </Typography>
                  <Typography variant="subtitle2" className="lg:text-[1.2vw]">
                    {e.username}
                  </Typography>
                </div>
              </Box>
              <Box className="w-[60%] mx-auto mt-2">
                <Rating
                  name="simple-controlled"
                  value={e.rating}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <Box className="mt-5 w-[80%] mx-auto">
                <Typography variant="subtitle1 md:text-[2vw] lg:text-[1vw]">
                  {e.comment}
                </Typography>
              </Box>
              <Box className="text-3xl justify-end -bottom-5 w-[23%] absolute hidden">
                <FaQuoteRight />
              </Box>
            </Card>
          );
        })}
      </div>
    );
  };
  

export default CardElement
