import React from "react";
import Image from "next/image";
import Head from "next/head";
export const metadata = {
  title: "Facilities",
  description:
    "Funworld Bangalore: Facilities: Amenities to enhance your visit. Discover our convenient facilities designed for your comfort.",
};
const Facilities = () => {
  const imageArray = [
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/water.webp",
      text: "Water Stations",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/atm.webp",
      text: "ATMs for Instant Cash",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/lockers.webp",
      text: "Lockers",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/changingroom.webp",
      text: "Changing Rooms",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/firstaid.webp",
      text: "First Aid Help",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/parking.webp",
      text: "Parking Space",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/lostfound.webp",
      text: "Lost & Found Center",
      width: 300,
      height: 400,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/helpkiosk.webp",
      text: "Help Kiosk",
      width: 300,
      height: 1800,
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Facilities/prayerroom.webp",
      text: "Prayer Room",
      width: 300,
      height: 400,
    },
  ];
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
    <div className="w-screen flex flex-col">
      <section className="w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
        <Image
          className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10 w-full max-sm:h-full object-contain  max-xs:object-cover"
          src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg1.webp"}
          alt="bacgkround img"
          width={2042}
          height={1029}
        />
        <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
              Facilities at the Park
            </div>
          </div>
        </div>
      </section>

      <div className="w-[80vw] mx-auto mt-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center">
            Facilities at the Park
          </h1>
          <p className="text-center">
            We offer wide ranges of free & paid services at the park as you
            need.
          </p>
        </div>
      </div>

      <div className="w-[70vw] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageArray.map((e, index) => {
          return (
            <div className="text-center" key={index}>
              <Image
                className="mx-auto"
                style={{ height: "300px" }}
                width={e.width}
                height={e.height}
                src={e.src}
                alt="/"
              />
              <span className="mx-auto mt-4 font-semibold">{e.text}</span>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Facilities;
