"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Rating,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { IoMdBicycle, IoMdColorPalette } from "react-icons/io";
import {
  GiBodyHeight,
  GiHotSpices,
  GiMountainClimbing,
  GiMusicalNotes,
  GiCoolSpices,
} from "react-icons/gi";
import { WiTrain } from "react-icons/wi";
import { BiSolidCool } from "react-icons/bi";

import { MdHealthAndSafety, MdOutlineCleanHands } from "react-icons/md";

import { FaQuoteRight } from "react-icons/fa";
import { BsCalendar3, BsThreeDots } from "react-icons/bs";
import { FcBusinesswoman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";

function WaterFirst(){
    return (
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 lg:text-start text-center px-[7vw] mt-10 xl:mt-16 2xl:mt-[12rem]">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[100%] flex flex-col lg:ml-12">
            <h3 className="text-md md:text-[32px] lg:text-[42px]  font-[550]">
              Get Ready for an Unforgettable Water Park Experience
            </h3>
            <p className="mt-5 md:text-[24px] text-[#5B5B5B] lg:leading-10 gap-4 flex flex-col">
              Dive deep into the thrills of our water park!
            </p>
          </div>
        </div>
  
        <div className="flex-1">
          <img
            src={"https://funworldblr.s3.amazonaws.com/public/Group+3548.jpg"}
            className=""
            alt="pic"
          />
        </div>
      </div>
    );
  };
export default WaterFirst
