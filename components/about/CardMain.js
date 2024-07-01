'use client'
import React from 'react'
import { Card, Typography } from "@mui/material";
function CardMain({data}) {
  return (
    <div className="lg:flex h-[100%] grid grid-cols-2 gap-y-6 md:h-[100%] max-lg:w-[100%] max-lg:mx-auto max-lg:ml-2 justify-center md:gap-x-6 items-end">
      {data.map((e, index) => {
        return (
          <Card
            key={index}
            elevation={3}
            className="w-[19%] hover:text-white hover:bg-gradient-to-b hover:from-[#FFB200] hover:to-[#F26702] max-lg:w-[90%] h-[75%] max-lg:h-[105%] md:px-5 md:py-5 bg-[#EBF0FE] group"
          >
            {e.icon}

            <Typography
              variant="h5"
              className="font-bold md:text-[30px] lg:text-[1.8vw] xl:text-[1.6vw] max-lg:text-xs max-lg:text-center mt-4 group-hover:text-white"
            >
              {e.header}
            </Typography>
            <Typography
              variant="h6"
              className="mt-4 w-[90%] max-lg:text-center max-lg:mx-auto max-lg:text-xs text-[gray] text-[2vw] xl:text-[1.2vw] lg:text-[1.1vw] leading-10 xl:leading-[4vh] lg:leading-8 group-hover:text-white"
            >
              {e.content}
            </Typography>
          </Card>
        );
      })}
    </div>
  )
}

export default CardMain
