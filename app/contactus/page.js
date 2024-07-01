import React from 'react'
import ProceedBtn from '@/components/Repeating/Button'
import Input from '@/components/Contact/Input'
import InTouch from '@/components/Contact/InTouch'
import Map from '@/components/Contact/Map'
import Image from 'next/image'
import Head from "next/head";
export const metadata = {
  title: "Contact Us",
  description:
    "Contact Funworld Bangalore: Get in touch today! We're here to answer your questions and help plan your perfect visit.",
};

const Index = () => {
  function handleSubmit(){
    // console.log("submit");
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className='w-screen flex flex-col pb-5'>
        <Head>
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
         <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
        <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover ' src={"https://funworldblr.s3.amazonaws.com/public/Contact/hero_background.webp"} alt="bacgkround img" width={2042} height={1029} />
        <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
              Contact Us
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute flex ">
          <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.webp" width={18} height={18} />
          </div>
          <div>
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp" width={28} height={28} />
          </div>
          <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.webp" width={68} height={68} />
          </div>
          <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner1.webp"
              width={141}
              height={168}

            />
          </div>
          <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner2.webp"
              width={141}
              height={148}
            />
          </div>
        </div>
         </section>
         <section className='w-full'>
          <div className='w-full flex text-center items-center flex-col font-dm-sans px-[10%]'>
            <h1 className='font-medium text-6xl max-xs:text-4xl max-lg:text-5xl max-md:text-5xl '>
              Get In Touch
            </h1>
            <div className='text-[#5B5B5B] font-normal text-2xl py-10 max-lg:text-xl max-md:text-lg'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </div>
            <div className=' w-full min-h-[230px] flex justify-center'>
              <div className='w-[100%] h-full grid grid-flow-col max-lg:grid-flow-row max-lg:grid-cols-2  max-lg:gap-2 max-sm:grid-cols-1 max-sm:px-[2%] max-sm:min-w-0 gap-2'>
                  <InTouch gradient={"linear-gradient(180deg, #9644FF 0%, #BF61FF 0.01%, #5B38E7 82.59%)"} image={"https://funworldblr.s3.amazonaws.com/public/Contact/VectorBlue.webp"} icon={"https://funworldblr.s3.amazonaws.com/public/Contact/home.webp"} heading={"Address"} text={"Palace Grounds, Jayamahal Main Rd, Opposite TV Tower, J.C.Nagar Bengaluru, Karnataka 560006"} />
                  <InTouch image={"https://funworldblr.s3.amazonaws.com/public/Contact/VectorRed.webp"}  gradient={"linear-gradient(180deg, #FF8E4B 0%, #FF9252 0.01%, #DB1450 82.59%)"} icon={"https://funworldblr.s3.amazonaws.com/public/Contact/phone.webp"} heading={"Phone"} text={"08431110000"} />
                  <InTouch image={"https://funworldblr.s3.amazonaws.com/public/Contact/VectorGreen.webp"} gradient={"linear-gradient(180deg, #A2C450 0%, #BF61FF 0.01%, #A0C54E 0.02%, #139180 82.59%)"}  icon={"https://funworldblr.s3.amazonaws.com/public/Contact/mail.webp"} heading={"Mail"} text={"info@funworldblr.com"} />
              </div>
          </div>
          </div>
         </section>
         <section className='w-screen py-8'>
          <div className='px-[10%] w-full'>
            <div className='grid grid-flow-row gap-4 grid-cols-2 max-sm:grid-cols-1'>
              <Input type={"input"} placeholder="First Name" />
              <Input  type={"input"} placeholder="Last Name" />
              <Input  type={"input"} placeholder="Email Address" />
              <Input  type={"input"} placeholder="Phone Number" />
            </div>
            <div className='w-full my-4'>
              <Input type={"textarea"} placeholder="Your Message" />
            </div>
            <div className='my-6 w-full flex justify-center'>
              <ProceedBtn text={"Submit"} clickFunction={handleSubmit} />
            </div>
          </div>
         </section>
         <section className='w-full h-[80vh] py-[2.5%] max-lg:h-[60vh]  '>
         <Map />
         </section>
         {/* <Footer /> */}
    </div>
    </>
  )
}

export default Index