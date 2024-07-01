"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
function CardMain({ num, src, head, content }) {
    return (
        <Card
          className={`lg:w-[26vw] w-[70vw]  my-auto rounded-[1rem] flex  ${
            num === 1 ? "flex-col-reverse" : "flex-col"
          }`}
        >
          <img
            className="lg:w-[43vw] w-[70vw] xl:w-[26vw] md:h-[50%] mx-auto"
            // image={start1}
            src={src}
            title="green iguana"
            width={400}
          />
          <CardContent className="md:w-[90%] h-[50%] ml-4 mr-4 py-8">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className=" lg:text-start text-center font-[600] md:text-[19px] lg:text-[22px]"
            >
              {head}
            </Typography>
            <Typography
              variant="h6"
              className="md:leading-9 lg:leading-6 text-sm lg:text-start text-center md:text-[2vw] lg:text-[1.4vw] xl:text-[1vw+]"
              color="text.secondary"
            >
              {content}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default CardMain
