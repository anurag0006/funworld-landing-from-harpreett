'use client'
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Hero = () => {

  useEffect(() => {
    if (window && window !== undefined) {
      const acceptedTerms = sessionStorage.getItem("acceptedTerms");
      if (!acceptedTerms) {
        Swal.fire({
          title: "Please Note!",
          html: "<p>Nylon swim clothes are <b>mandatory</b><br />to enter Water World.</p>",
          icon: "info",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK!",
        }).then((result) => {
          if (result.isConfirmed) {
            sessionStorage.setItem("acceptedTerms", true);
          }
        });
      }
    }
  }, []);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleCLick = (arrow) => {
    if (arrow === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    // console.log(slideIndex)
  }, [slideIndex]);

  return (
    <div>
      <div className="overflow-hidden lg:mb-16">
        <div className="w-[100%] xl:min-h-[100vh] flex relative ">
          <div
            onClick={() => handleCLick("left")}
            className="p-2 z-10 absolute top-0 bottom-0  md:left-[70px] left-[20px] m-auto cursor-pointer rounded-full border-2 border-[#FF9900] w-[30px] h-[30px] flex items-center justify-center"
          >
            <img
              priority
              src="https://funworldblr.s3.amazonaws.com/public/Reusable/carouselBack.webp"
              alt="back arrow"
            />
          </div>
          <div
            style={{
              transform: `translateX(${slideIndex * -100}vw)`,
              transitionProperty: "all",
              transitionDuration: "1000ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "300ms",
            }}
            className={`h-full flex`}
          >
            <div className="flex w-[100vw] justify-center" id="slide">
              <div className="">
                <img
                  priority
                  src="https://funworldblr.s3.amazonaws.com/public/Home/hero/WhatsApp+Image+2024-06-07+at+1.43.45+PM.jpeg"
                  alt="img1"
                />
              </div>
            </div>
            <div className="flex w-[100vw] justify-center" id="slide">
              <div className="">
                <img
                  priority
                  src="https://funworldblr.s3.amazonaws.com/public/Home/hero/WhatsApp+Image+2024-05-30+at+12.14.20+AM.jpeg"
                  alt="img1"
                />
              </div>
            </div>

            <div className="flex  w-[100vw] justify-center" id="slide">
              <div className="">
                <img
                  priority
                  src="https://funworldblr.s3.amazonaws.com/public/Home/hero/hero1.jpg"
                  alt="img2"
                />
              </div>
            </div>

            {/* <div className="flex w-[100vw] justify-center" id="slide">
              <div className="">
                <img
                  priority
                  src="https://funworldblr.s3.amazonaws.com/public/Home/Carousel/Image1.webp"
                  alt="img3"
                />
              </div>
            </div> */}
          </div>

          <div
            onClick={() => handleCLick("right")}
            className="p-2 z-10 absolute top-0 bottom-0 md:right-[70px]  right-[20px] m-auto cursor-pointer bg-[#FF9900]  rounded-full border-2 border-[#FF9900] w-[30px] h-[30px] flex items-center justify-center"
          >
            <img
              priority
              width={50}
              height={50}
              src="https://funworldblr.s3.amazonaws.com/public/Reusable/carouselForward.webp"
              alt="forward arrow"
            />
          </div>
        </div>

        {/* <div className="relative ">
          <img
            priority
            src={
              "https://funworldblr.s3.amazonaws.com/public/Home/hero/hero1.jpg"
            }
            alt="hero img"
            className="2xl:w-full  max-sm:h-full object-contain  max-xs:object-cover"
          /> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
