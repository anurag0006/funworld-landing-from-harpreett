import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import CardElement from "./CardElement";
function CustomerReviewPage() {
    const data = [
      {
        src: "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg",
        name: "Divakshi Bhardwaj",
        username: "@Divakshi Bhardwaj",
        rating: 4,
        comment:
          "The very fun place went there with my colleagues, and it was so much fun, enjoyed it a lot! The rides & activities were so good, worth every single penny! 👌🏻😁",
      },
      {
        src: "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg",
        name: "Pankaj Shrivastavnkaj",
        username: "@Pankaj Shrivastav",
        rating: 5,
        comment:
          "Very good to place to have fun time with family and friends. Kids friendly rides in Water park and in Amusement park. 👌🏻😁",
      },
      {
        src: "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg",
        name: "Sanjay Kumar",
        username: "@Sanjay Kumar",
        rating: 4,
        comment:
          "I had an amazing time at this place with my colleagues. It was an absolute blast, and I had a great time! The rides & activities were outstanding, definitely worth the visit! 👏😃",
      },
    ];
    return (
      <div
        style={{ width: "100vw", height: "auto" }}
        className="max-md:mt-10 flex flex-col items-center"
      >
        <img
          src={"https://funworldblr.s3.amazonaws.com/public/Amusement/vector.jpg"}
          width={200}
          alt="pic"
          className="w-[100%] left-0 absolute h-[300px] -z-20 mx-auto max-lg:hidden"
        />
        <Typography
          variant="h3"
          className="text-center lg:pt-12 pt-8 md:mt-3 max-md:text-xl max-md:font-[650]"
        >
          Customers&apos; Reviews
        </Typography>
        <Typography variant="subtitle1" className="text-center mt-5 px-6">
          Nothing&apos;s better than an electrifying experience at amusement parks
        </Typography>
        <Box className="mx-auto w-[80%] z-10 lg:min-h-[34vh] relative">
          <CardElement data={data} />
        </Box>
      </div>
    );
  };
  
export default CustomerReviewPage
