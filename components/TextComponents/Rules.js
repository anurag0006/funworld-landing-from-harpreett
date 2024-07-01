import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head';


const Rules = () => {
    return (
        <div className=''>
            
            <div className='px-[13vw] flex flex-col gap-8 text-[#5B5B5B]'>
                <p>
                    For your safety and enjoyment at our Park, please carefully read all of the text below. Failure to follow any of the regulations, conditions and instructions set forth below may result in serious injury to yourself or other individuals. Individuals not following Park rules and safety instructions, will be subject to immediate ejection from the Park without refund.
                </p>

                <h1 className='text-4xl font-extrabold text-black'>
                    Dress Code
                </h1>
                <p>
                    In keeping with a family-friendly environment, the Park prohibits clothing that would tend to be offensive and/or too revealing of one&apos;s body. This includes the following rules, which may also be supplemented on a case-by-case basis as determined by the Park, in its good faith discretion and without further notice:
                </p>

                <p>
                    The Park has a wide assortment of foods and beverages available, including bottled water. Contact the Park if you desire more specific information not available on these web pages.
                </p>

                <div>
                    <div className='flex items-start gap-2 mt-8'>
                        <img priority className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={30} alt="tick" />
                        <p>Amusement Park Attire – Shoes and appropriate clothing are required at all times. (e.g., shirts must fully cover the belly, all “private” body areas must be appropriately covered, and the Park does not allow sagging clothing that may reveal undergarments).</p>
                    </div>

                    <div className='flex items-start gap-2 mt-8'>
                        <img priority  className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={30} alt="tick" />
                        <p>Water Park Attire – Appropriate swimwear is required for water rides or water-play structures. Swimwear which is too provocative or revealing, including without limitation, transparent or mesh-style material, is prohibited.</p>
                    </div>

                    <div className='flex items-start gap-2 mt-8'>
                        <img priority className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={30} alt="tick" />
                        <p>For safety reasons and to prevent property damage of rides and attractions, the Park prohibits cut-off jeans, denim shorts, clothing/swimwear with metal rivets or spikes, metal fasteners or buckles, or belts. Shoes of any kind are not allowed on any water slide or tube rides.</p>
                    </div>

                    <div className='flex items-start gap-2 mt-8'>
                        <img priority className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={30} alt="tick" />
                        <p>The Park prohibits any jewelry that may pose a hazard to the rider, other guests, the rides itself, or other property. Prohibited items may include: bulky, protruding or dangling jewelry (e.g., large hoop earrings which could snag on something, long necklaces which can pose a strangulation hazard, bulky rings, and any piercings that could snag or catch on equipment).</p>
                    </div>

                    <div className='flex items-start gap-2 mt-8'>
                        <img priority className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                        <p>Masks, horror, or Halloween-style attire is not permitted. We do not permit clothing that depicts violence.</p>
                    </div>

                    <div className='flex items-start gap-2 mt-8'>
                        <img priority className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                        <p>Appropriate “public” clothing. No pajamas, bath robes, lingerie, indoor slippers, costumes of any kind, etc.</p>
                    </div>

                    <div className='flex items-start gap-2 mt-8'>

                        <img priority className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={30} alt="tick" />
                        <p>No vulgar or offensive tattoos, statements or artwork on clothing. This includes curse words, depictions of sexual acts or nudity, depictions or messages of violence, and racially or religiously divisive/hateful material.</p>
                    </div>
                </div>







                <div className='text-4xl font-extrabold text-black'>
                    Food & Beverage
                </div>

                <p>
                    The Park has a wide assortment of foods and beverages available, including bottled water. Contact the Park if you desire more specific information not available on these web pages.
                </p>


                <p>
                    To our guests with food sensitivities, allergies or special dietary needs: Our food outlets prepare and serve products sourced from third parties, which contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy and gluten. Regular kitchen operations involve shared cooking and preparation areas, and food variations may occur to differences in suppliers, ingredient, substations, recipe revisions, and /or preparation at the parks. As such, we regret to inform you that THE PARK CANNOT, AND DOES NOT, MAKE ANY REPRESENTATIONS OR GUARANTIES WHATSOEVER REGARDING THE ALLERGY-FREE CONTENTS OF ANY FOODS OR BEVERAGES, OR THE SAFETY THEREOF (ESPECIALLY WITH REGARD TO ANY ALLERGIES).
                </p>

                <p>
                    Personal Food, Beverage and Coolers.
                </p>

                <p>
                    In any event, guests may bring personal foods into the park, to the extent that they are medically necessary (e.g., for diabetics, baby formula for infants, gluten-free foods, or allergy-safe foods for allergies).
                </p>

                <div>
                    Operational Policies
                </div>

                <div className='flex items-start gap-2 mt-3'>
                    <img className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                    <p>Prices and operating schedule are subject to change without notice.</p>
                </div>

                <div className='flex items-start gap-2 mt-3'>
                    <img className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                    <p>All attractions are subject to temporary maintenance, safety or inclement weather shutdowns.</p>
                </div>

                <div className='flex items-start gap-2 mt-3'>
                    <img className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                    <p>These Park Rules & Policies are not comprehensive, and are subject to change without notice. The Park may have numerous additional rules and procedures applicable to guests which, if not followed, may subject the guest to ejection without refund.</p>
                </div>

                <div className='text-4xl font-extrabold text-black'>Security as the Park</div>

                <p>
                    The Park strives to make your experience a happy one, in all respects. Unfortunately, there is no way that we can erase the wicked intent of some people. Therefore, please understand that the Park cannot, and does not, guarantee your personal security or that of your personal property (even if placed in a locker), and in no event will the Park be held liable for your lost, stolen or damaged possessions. If you need to store your possessions, ask the Park about lockers. If you have loose items while wanting to go on a ride, please have a friend or family member hold them or put such possessions in a locker.
                </p>

                <p>
                    It is the unfortunate truth that at any amusement park, or at any place in society, no amount of security can prevent people from acting in a criminal manner if they are intent on so acting. The Park can only try to reasonably watch over the premises and the people therein, and respond in a professional manner to any security threat or incident.
                </p>

                <p>
                    If you experience a security issue, please notify Park staff; we are here to assist you.
                </p>

                <div className='text-4xl font-extrabold text-black gap-3'>
                    Other important links
                </div>

                <Link href={'/guidelines/codeofconduct'}><div className='flex items-start gap-2'>
                    <img className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                    <p>Code of Conduct</p>
                </div></Link>

                <Link href={'/guidelines/codeofsafety'}><div className='flex items-start gap-2'>
                    <img className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                    <p>Code of Safety</p>
                </div></Link>

                <Link href={'/guidelines/disclaimer'}><div className='flex items-start gap-2'>
                    <img className='mt-1' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/tick.webp"} width={20} alt="tick" />
                    <p>Disclaimer</p>
                </div></Link>
            </div>
        </div>
    )
}

export default Rules