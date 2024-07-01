import React from "react";
import {
  Box,
  Card,
  Typography,
} from "@mui/material";

function CardService({ data }) {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-8 gap-x-8 px-8 w-[90%] h-full mx-auto">
        {data.map((e, index) => {
          return (
            <Card
              key={index}
              className="lg:w-[90%] w-[70%] h-[100%] hover:text-white hover:bg-gradient-to-r hover:from-[#FFB200] hover:to-[#F26702]  max-md:w-full"
            >
              <div>
                {/* <Image src={e.src} width={300} height={300} alt='pic' /> */}
                {e.src}
                <Box className="gap-0 flex flex-col">
                  <Typography className="p-4 pb-3 text-[22px] font-[650] max-lg:text-lg">
                    {e.head}
                  </Typography>
                  <Typography className="px-4 pb-4">{e.content}</Typography>
                </Box>
              </div>
            </Card>
          );
        })}
      </div>
    );
  };
  

export default CardService
