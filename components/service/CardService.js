import React from "react";
import Image from "next/image";
import { Box, Button, Card, Typography } from "@mui/material";
import {
  MdComputer,
  MdHealthAndSafety,
  MdPark,
  MdWebhook,
} from "react-icons/md";
import { BsBook, BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function CardService({data}){
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-y-8 w-[90%] h-full mx-auto lg:px-10">
        {data.map((e, index) => {
          return (
            <Card
              key={index}
              className="w-[90%] h-[100%] mx-auto shadow-xl rounded-xl"
            >
              <div>
                {/* <Image src={e.src} width={300} height={300} alt='pic' /> */}
                {e.src}
                <Box className="gap-2 my-4 px-4 flex flex-col">
                  <Typography className="l text-[#424234] text-[22px] font-[650] max-lg:text-sm">
                    {e.head}
                  </Typography>
                  <Typography className="mb-4 lg:mb-0 max-lg:text-xs text-[#5B5B5B]">
                    {e.content}
                  </Typography>
                </Box>
              </div>
            </Card>
          );
        })}
      </div>
    );
  };