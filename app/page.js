'use client'
import Hero from "@/components/Home/Hero";
import ParkAttractions from "@/components/Home/ParkAttractions";

import Welcome from "@/components/Home/Welcome";
import YourTicket from "@/components/Home/YourTicket";
import Head from "next/head";
export const metadata = {
  title: "Funworldblr",
  description:
    "Unleash the thrill! Visit Fun World Amusement Park | Funworldblr for exhilarating rides, family fun, and unforgettable memories. Book now and join the adventure!",
};
export default function Home() {


  return (
    <>
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
    <main className="w-full">
      <Hero />
      <Welcome />
      <YourTicket />
      <ParkAttractions />
    </main>
    </>
  );
}
