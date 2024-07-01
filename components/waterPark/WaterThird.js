import React from "react";
import {
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { BsCalendar3 } from "react-icons/bs";
import TableComponentMain from "./TableComponentMain";

function WaterThird() {
    const data = [
      {
        name: "Ticket",
        value: "$100",
        total: "$400",
      },
      {
        name: "Ticket",
        value: "$100",
        total: "$400",
      },
      {
        name: "Ticket",
        value: "$100",
        total: "$400",
      },
      {
        name: "Ticket",
        value: "$100",
        total: "$400",
      },
      {
        name: "Ticket",
        value: "$100",
        total: "$400",
      },
    ];
    return (
      <div className="w-full h-full px-[1rem] md:px-[10rem] flex flex-col gap-10">
        <Typography
          variant="h3"
          className="text-center text-lg md:text-[4rem] md:leading-[4rem]"
        >
          Secure Your Fun Spot Today!
          <br /> Book Tickets Online
        </Typography>
  
        <Box className="h-auto">
          <Tabs>
            <Tab label="Booking Details" className="bg-[#DCDCDC] rounded-t-xl" />
            <Tab
              label="Make Payment"
              className="bg-[#DCDCDC] rounded-t-xl mx-4"
            />
            <Tab label="Collect Tickets" className="bg-[#DCDCDC] rounded-t-xl" />
          </Tabs>
          <Box className="border p-4 flex flex-col gap-5">
            <Typography
              variant="h4"
              className="text-2xl text-center md:text-left md:text-[2rem]"
            >
              Choose Date
            </Typography>
            <Box className="md:flex-row flex flex-col md:gap-10 gap-2 items-center">
              <Box className="md:p-5 p-2 w-[10rem] rounded-2xl bg-[#DCDCDC] text-center md:w-[12rem]">
                <Typography className="md:font-[650] text-sm font-[200]">
                  Today
                </Typography>
                <Typography className="md:font-[650] text-sm font-[200]">
                  28 Jun 2023
                </Typography>
              </Box>
              <Box className="md:p-5 p-2 w-[10rem] rounded-2xl bg-[#DCDCDC] text-center md:w-[12rem]">
                <Typography className="md:font-[650] text-sm font-[200]">
                  Today
                </Typography>
                <Typography className="md:font-[650] text-sm font-[200]">
                  29 Jun 2023
                </Typography>
              </Box>
              <Box className="md:p-5 p-2 w-[10rem] rounded-2xl bg-[#DCDCDC] text-center md:w-[12rem]">
                <BsCalendar3 className=" mx-auto md:text-[1.5rem]" />
  
                <Typography className="md:font-[650] text-sm font-[200] mt-1">
                  Choose Date
                </Typography>
              </Box>
            </Box>
  
            <Divider />
            <TableComponentMain data={data} />
            <Divider />
  
            <Box className="h-[30%] gap-5 flex flex-col">
              <Typography variant="h4" className="md:font-[650] text-lg">
                Booking Details
              </Typography>
              <Box className="w-full flex justify-between">
                <input
                  placeholder="First Name"
                  className="w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
                <input
                  placeholder="Mobile Number"
                  className="w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
              </Box>
              <Box className="w-full flex justify-between">
                <input
                  placeholder="Address"
                  className="w-[100%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
              </Box>
              <Box className="w-full flex justify-between">
                <input
                  placeholder="City"
                  className="w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
                <input
                  placeholder="State"
                  className="w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
              </Box>
              <Box className="w-full flex justify-between">
                <input
                  placeholder="Zip"
                  className="w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
                <input
                  placeholder="Email Address"
                  className="w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500"
                />
              </Box>
  
              <Button className="btn text-white">Proceed To Payment</Button>
            </Box>
          </Box>
        </Box>
      </div>
    );
  };
export default WaterThird
