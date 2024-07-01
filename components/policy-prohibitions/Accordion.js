'use client'
import React from 'react'
import { useState } from 'react'
function Accordion() {
  const data = [
    {
        header: "Photography - Personal & Commercial",
        content: `Personal.  Guests are welcome to take pictures of themselves, their friends and family, their group, and the scenery in general, for their own personal use. However, NO cameras of any kind (including cell phones) are allowed on any ride or attraction, because such items pose a safety hazard.<br/><br/>

        In addition, no one is permitted to take photographs of others who object, or which violate another’s privacy, rights to publicity, or which are harassing, stalking, or threatening.  Image taking or recording is strictly prohibited, under all circumstances, in bathrooms, changing rooms, and locker areas; violators may be held for law enforcement, and are subject to arrest and prosecution.<br/><br/>
        
        The Park May Take and Use Images & Video of All Guests.  The Park at all times reserves the right to videotape patrons, and take still images, and to utilize those images and videos for any reason, including marketing, advertising, promotion, on social media, live streaming on the Internet, for safety and security, for documentation as evidence in a legal or criminal matter or other investigation, for news reporting, and otherwise in an unrestricted manner for legitimate purposes.  All property ownership of such materials, and copyright in and to all such materials, shall belong exclusively to Park in perpetuity, without any compensation or other consideration to any guest or other person in, on or around the Park property.<br/><br/>
        
        Commercial.  Commercial photography of any kind is strictly prohibited (including without limitation, still or moving images, modeling shots, student films, comedy routines, documentaries, commercials, TV news, major motion picture films, Internet soap operas, reality TV, actor demo reels, submission videos for reality TV, footage as part of a school project, documentation of stunts and dangerous activities (whether for commercial use or not), promotional videos, music videos, cable programs, etc.), except where prior, written permission has been obtained from the Park’s owner in the form of a contract signed by an executive within Park’s corporate office.<br/><br/>
        
        In any event where unauthorized video or images has been uploaded to any social media channel, Park shall have the unrestricted and exclusive right and authority to have such materials removed.  Any materials which defame the Park may result in legal action for damages, and the Park shall have absolute right and authority to obtain both temporary and permanent injunctions from the further use or dissemination of such material, in all channels and all mediums of communications, throughout the world, whether now known or hereafter devised, and to obtain all materials and obtain an order for the destruction of all such materials.`
    },
    {
        header: "Drones - Prohibited & Illegal",
        content: "Use of drones (in, over, or around the Park), whether for photographic purposes or otherwise, is strictly prohibited (unless the user has been granted written, contractual permission for that specific instance from an officer of the Park or its parent entity). Violations may subject the user to immediate ejection, confiscation of the drone, and referral of the matter to authorities. Drones are a serious safety hazard to ride operations, Park operations (including electrical facilities), and to the Park’s guests and personnel. Use of drones in, over or around the Park, also constitutes an illegal trespass, an invasion of the Park’s privacy, and a tortious interference to our operations."
    },
    {
        header: "Non-Amusement Park Amenities",
        content: "The Park does not allow any non-amusement park activities by guests, including without limitation, political activities, fundraising, organized or group religious practices or rituals, demonstrations, exercise classes, athletic team practices, unauthorized commercial activities, or protests, anywhere on-site, nor anywhere outside the Park’s perimeter where such activities may interfere with Park operations, guest attendance or enjoyment, or traffic flow into/out of/around the Park, or which would compromise safety and security. At a minimum, any protests/demonstrations must be outside of the Park’s property and at least 500 feet away from all Park entrances/exits. Anyone violating this rule on or within Park property will be subject to immediate removal from Park premises."
    }
]

const [isOpenList, setIsOpenList] = useState(data.map(() => false));

const toggleAccordion = (index) => {
  setIsOpenList((prevOpenList) => {
    const newOpenList = [...prevOpenList];
    newOpenList[index] = !newOpenList[index];
    return newOpenList;
  });
};

const AccordionItem = ({ header, content, isOpen, toggleAccordion }) => {
    return (
      <div className="w-[70vw] flex flex-col mx-auto mt-6">
        <button className={` ${isOpen? 'bg-gradient-primary text-white':"bg-pink-100 text-pink-600"} font-bold w-[70vw] py-2`} onClick={toggleAccordion}>
          {header}
        </button>
        {isOpen && <div className='border-orange-200 border-2 p-4' dangerouslySetInnerHTML={{ __html: content }}></div>}
      </div>
    );
  };
  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          header={item.header}
          content={item.content}
          isOpen={isOpenList[index]}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
