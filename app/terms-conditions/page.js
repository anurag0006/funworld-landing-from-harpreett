import React from "react";
import Image from "next/image";
import Head from "next/head";
export const metadata = {
  title: "Terms & Conditions",
  description:
    "Funworld Bangalore: Terms & Conditions: Know before you go! Review our terms and conditions to ensure a smooth visit.",
};
const Terms = () => {
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
              Terms & Conditions
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto">
        <div className="max-sm:pt-2 max-md:pt-8 lg:pt-12 xl:pt-[5vw] flex flex-col gap-8">
          <h1 className="text-[54px] font-[600] max-md:text-5xl max-sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="text-left font-semibold">
            This document is an electronic record published in accordance with
            the Information Technology Act, 2000 and rules made there under for
            access or usage of www.funworldblr.com website.
          </p>
          <div>
            User agrees to adhere to the terms and conditions (“
            <span className="font-semibold">Terms of Use</span>“) relating to
            the use of of www.funworldblr.com (“
            <span className="font-semibold">Website</span>“).
            <br />
            <br />
            This Website (<span className="font-semi">www.funworldblr.com</span>
            ) is owned and registered by{" "}
            <span className="font-semibold">
              Fun World and Resorts India Pvt Ltd (“Funworld“)
            </span>
            , a company duly existing and incorporated under the provisions of
            Indian Companies Act, 1956, and having its registered office at
            Bengaluru, INDIA and, its corporate office at bengaluru, INDIA,
            (Company Identification Number:
            <span className="font-semibold"> — — — — </span>).
            <br />
            <br />
            <span className="font-semibold">Website information</span> All
            information available on the Website is provided without any
            liability whatsoever to FunWorld . The information on this Website
            is merely to provide information on the present facilities and
            activities at the theme park, water park, snowcity and starcity
            called{" "}
            <span className="font-semibold">
              “Fun World“, “Water World”, “Snow City”
            </span>{" "}
            and <span className="font-semibold">“Star City”</span> respectively
            and the rules and regulations prescribed for use of the facilities
            made available therein The User is bound and responsible for use of
            any services provided on the Website, including reviews, and is
            subject to the rules, guidelines, policies, terms, and conditions
            applicable to such services, which form an integral part of these
            Terms of Use. Certain information on the Website, at times, may be
            incorrect and FunWorld does not provide any express or implicit
            guarantee as to its correctness. FunWorld reserves the right, in its
            sole discretion, to modify the information at any time and in
            particular when up-dating or for maintenance purposes of the
            Website. The User shall be responsible to check these Terms of Use
            periodically for changes. Continued use of the Website following the
            posting of changes will mean that the User expressly accepts and
            agrees to the changes. FunWorld grants such User a personal,
            non-exclusive, non-transferable and limited right to use the
            Website.
            <br />
            <br />
            FunWorld does not guarantee that the information on the Website
            complies with your local legislation, if the User has chosen to
            access the Website from a different location other than India.
            <br />
            <br />
            <span className="font-semibold">Membership Eligibility</span> The
            User represents he is a person who can form legally binding
            contracts under Indian Contract Act, 1872, and is not incompetent to
            contract, and neither a minor, nor an un-discharged insolvent, etc.
            If a minor, i.e., below 18 years of age, the User must not register
            himself with us and must not transact or use the Website. FunWorld ’
            retains the right, in its sole discretion, to terminate the User’s
            membership and / or repudiate access to the Website, at any time, if
            it notices or it discovers that the User is incompetent to contract
            as provided under the Indian Contract Act, 1872. Especially for
            minors, FunWorld encourage parents and guardians to spend time
            online to participate in the interactive activities offered on our
            Website.
            <br />
            <br />
            <span className="font-semibold"> User Responsibility</span> The User
            shall alone and entirely be responsible to maintain the
            confidentiality and not reveal his User ID and Password and all
            activities that occur under his User ID and password and also
            transaction ID. The User agrees to provide any information required
            by FunWorld , to be correct, accurate, current or complete and in
            accordance with the Terms of Use of this Website. In the event
            FunWorld have reasonable grounds to suspect that such information is
            untrue, inaccurate, not current or incomplete, or not in accordance
            with the Terms of Use, FunWorld reserve the right to indefinitely
            suspend or terminate or block access to the Website to such User/s.
            <br />
            <br />
            <span className="font-semibold"> No Guarantees</span> FunWorld does
            not guarantee that the information and facilities available on the
            Website will be provided without any interruptions or errors or the
            server making the Website available is free from viruses or other
            dangerous element.
            <br />
            <br />
            <span className="font-semibold">
              {" "}
              Electronic Communications
            </span>{" "}
            The User agrees and understands that he is communicating with
            FunWorld through electronic mode / medium and consents to receive
            communications via electronic mode / medium from FunWorld
            periodically and as and when required. FunWorld may communicate with
            the User by e-mail or by such other modes of communication,
            electronic or otherwise as it deems fit.
            <br />
            <br />
          </div>

          <div>
            <span className="font-semibold">Use of Website</span> The User
            agrees, undertakes and confirms that his use of Website and
            information published by him, if any, must not:
            <br />
            <br />
            <li>
              belong to another person and to which he does not have any right
              to;
            </li>
            <br />
            <li>
              be grossly harmful, harassing, blasphemous, immoral, unethical,
              defamatory, obscene, pornographic, paedophilic, libellous,
              invasive of another’s privacy, hateful, or racially, ethnically
              objectionable, disparaging, relating or encouraging money
              laundering or gambling, or otherwise unlawful in any manner
              whatever; or unlawfully threatening or unlawfully harassing
              including but not limited to “indecent representation of women”
              within the meaning of the Indecent Representation of Women
              (Prohibition) Act, 1986;
            </li>
            <br />
            <li>be misleading in any way;</li>
            <br />
            <li>
              be patently offensive to the online community, such as sexually
              explicit content, or content that promotes obscenity, paedophilia,
              racism, bigotry, hatred or physical harm of any kind against any
              group or individual;
            </li>
            <br />
            <li>harass or advocate harassment of another person;</li>
            <br />
            <li>
              involve the transmission of “junk mail,” “chain letters,” or
              unsolicited mass mailing, “phishing” or “spamming”;
            </li>
            <br />
            <li>
              promote illegal activities or conduct that is abusive,
              threatening, obscene, defamatory or libellous;
            </li>
            <br />
            <li>
              infringe upon or violate any third party’s rights [including, but
              not limited to, intellectual property rights, rights of privacy
              (including unauthorized disclosure of a person’s name, e-mail
              address, postal address or phone number) or rights of publicity];
            </li>
            <br />
            <li>
              promote an illegal or unauthorized copy of another person’s
              copyrighted work (see “Copyright complaint” below for instructions
              on how to lodge a complaint on unauthorised use of copyrighted
              material), such as providing pirated computer programs or links to
              them, providing information to circumvent manufacture-installed
              copy-protect devices, or providing pirated music or links to
              pirated music files;
            </li>
            <br />
            <li>
              contain restricted or password-only access pages, or hidden pages
              or images (those not linked to or from another accessible page);
            </li>
            <br />
            <li>
              provide material that exploits people in a sexual, violent or
              otherwise inappropriate manner or solicits personal information
              from anyone;
            </li>
            <br />
            <li>
              provide instructional information about illegal activities such as
              making or buying illegal weapons, violating someone’s privacy, or
              providing or creating computer viruses;
            </li>
            <br />
            <li>
              contain video, photographs, or images of another person (with a
              minor or an adult) which are offensive in any way;
            </li>
            <br />
            <li>
              try to gain unauthorized access or exceed the scope of authorized
              access to the Website or to profiles, blogs, communities, account
              information, bulletins, friend request, or other areas of the
              Website or solicits passwords or personal identifying information
              for commercial or unlawful purposes from other users;
            </li>
            <br />
            <li>
              engage in commercial activities and/or sales without FunWorld ’
              prior written consent such as contests, sweepstakes, barter,
              advertising and pyramid schemes, or the buying or selling of
              “virtual” items related to the Website;
            </li>
            <br />
            <li>
              solicit gambling or engage in any gambling activity which FunWorld
              , in its sole discretion, believes is or could be construed as
              being illegal;
            </li>
            <br />
            <li>
              interferes with another user’s use and enjoyment of the Website or
              any other individual’s user and enjoyment of similar services;
            </li>
            <br />
            <li>
              refer to any website or URL that, in FunWorld ’ sole discretion,
              contains inappropriate material for the Website or any other
              website, contains content which prohibits or violates the letter
              or spirit of these Terms of Use.
            </li>
            <br />
            <li>harm minors in any way;</li>
            <br />
            <li>
              infringe any patent, trademark, copyright or other proprietary
              rights or third party’s trade secrets or rights of publicity or
              privacy or shall not be fraudulent or involve the sale of
              counterfeit or stolen items;
            </li>
            <br />
            <li>violate any law for the time being in force;</li>
            <br />
            <li>
              deceive or mislead the addressee / users about the origin of such
              messages or communicates any information which is grossly
              offensive or menacing in nature;
            </li>
            <br />
            <li>impersonate another person;</li>
            <br />
            <li>
              contain software viruses or any other computer code, files or
              programs designed to interrupt, destroy or limit the functionality
              of any computer resource; or contains any Trojan horses, worms,
              time bombs, cancel bots, Easter eggs or other computer programming
              routines that may damage, detrimentally interfere with, diminish
              value of, surreptitiously intercept or expropriate any system,
              data or personal information;
            </li>
            <br />
            <li>
              threaten the unity, integrity, defence, security or sovereignty of
              India, friendly relations with foreign states, or public order or
              causes incitement to the commission of any cognizable offence or
              prevents investigation of any offence or is insulting any other
              nation.
            </li>
            <br />
            <li>be false, inaccurate or misleading;</li>
            <br />
            <li>
              directly or indirectly, offer, attempt to offer, trade or attempt
              to trade in any item, the dealing of which is prohibited or
              restricted in any manner under the provisions of any applicable
              law, rule, regulation or guideline for the time being in force.
            </li>
            <br />
            <li>
              create liability for us or cause us to lose (in whole or in part)
              the services of FunWorld internet service providers (ISPs) or
              other suppliers.
            </li>
          </div>

          <div>
            <span className="font-semibold">Intellectual Property Rights</span>{" "}
            All information containing trade mark, copyrights including text,
            graphics, interface, logos, design, frames, sounds music, drawings,
            expression, etc, is the property of FunWorld and in no event its
            disclosure be interpreted as granting the User a license or right to
            use any of it. In the event of any such use the same shall be
            constituted as an infringement under the applicable laws. Except, as
            expressly provided in the Terms of Use, no part of the Website and
            none of its content must be copied, reproduced, republished,
            uploaded, posted, publicly displayed, encoded, translated,
            transmitted or distributed in any way (including “mirroring”) to any
            other computer, server, website or other medium for publication or
            distribution or for any commercial enterprise, without our express
            prior written consent. The User may use information on the products
            and services available on the Website for downloading, provided that
            he (1) does not remove any proprietary notices on such documents;
            (2) uses such information only for personal, non-commercial
            informational purpose and does not copy or post such information on
            any networked computer or broadcast it in any media; (3) makes no
            modifications to any such information, and (4) does not make any
            additional representations or warranties relating to such documents.
            <br />
            Other Businesses
            <br />
            FunWorld disowns and disclaims all liability for the actions,
            products, information and services on the Website, which are linked
            to affiliates and / or third party websites using Website’s APIs or
            otherwise. In addition, Website may provide links to the third party
            websites of our affiliated companies and certain other businesses
            for which, FunWorld assumes no responsibility for examining or
            evaluating the products and services offered by them. No warranty
            for the offerings, any of these businesses or individuals or the
            content of such third party website(s) is given by FunWorld .
            Further, FunWorld does not endorse, in any way, any third party
            website(s) or content thereof.
            <br />
            <br />
            <span className="font-semibold">Privacy</span> FunWorld understands
            privacy concerns of the User and protection of his personal
            information is of utmost priority and significance. FunWorld stores
            and secures all personal information so collected as defined under
            the Information Technology Act, 2000,on computers that may be
            protected by physical and reasonable technological security measures
            and procedures in accordance with Information Technology Act, 2000
            and Rules made there under. Our current Privacy Policy is available
            at www.funworldblr.com/privacy-policy. Should the User object to
            such Information being transferred or used in this way, he is
            advised not to use this Website.
            <br />
            <br />
            <span className="font-semibold">
              DISCLAIMER OF WARRANTIES AND LIABILITY
            </span>{" "}
            The materials on this website are provided on “AS IS” basis and
            without warranties of any kind, either express or implied. To the
            fullest extent permissible pursuant to applicable law, FunWorld
            disclaims all warranties, express or implied, including, but not
            limited to, implied warranties of non-infringement, merchantability
            and fitness for a particular purpose. Although due to security
            measures & technological precautions are put in place, FunWorld do
            not warrant that the functions contained in the materials will be
            uninterrupted or error-free, that the materials will meet your
            requirements, that defects will be corrected, or that this website
            or the server that makes it available are free of viruses or other
            harmful components or that confidentiality of information
            transmitted through the website will be maintained. FunWorld does
            not warrant or make any representations regarding the use or the
            results of the use of the materials on this website in terms of
            their correctness, accuracy, reliability or otherwise.
            <br />
            <br />
            <span className="font-semibold">Personal Details</span> The User
            must provide correct postal address, email id and a valid phone
            number while placing an order on the Website. By registering with
            FunWorld , the User consents to be contacted by FunWorld via phone
            calls and / or SMS notifications, in case of any order or shipment
            or delivery related updates. FunWorld reserves the right to send
            promotional SMS, emails and notifications to Users about various
            offers/activities of FunWorld , its affiliates or business partners.
            <br />
            <br />
          </div>

          <div>
            <span className="font-semibold">Services and Payment</span> While
            utilising any of the payment methods available on the Website,
            FunWorld does not assume responsibility or liability whatsoever, in
            respect of any loss or damage that may arise directly or indirectly
            to the User due to:
            <li>Lack of authorization for any transaction/s, or</li>
            <li>
              Exceeding the preset limit mutually agreed by the User and his
              “Bank/s”, or
            </li>
            <li>Any payment issues arising out of the transaction, or</li>
            <li>Decline of transaction for any other reason/s.</li>
            All payments made against the purchases / services on Website by the
            User shall only be accepted in Indian Rupees.
            <br />
            While placing an order / accepting delivery of an order, the User
            must provide supporting valid photo ID document to establish the
            ownership of the order as also identity of the person making the
            payment, if any, for safe online shopping environment to Users.
            <br />
            <br />
          </div>

          <div>
            <span className="font-semibold">Cancellations / Refunds</span>{" "}
            Cancellations of entry tickets are permitted only up to 48 hours
            prior to the intended date of visit, and 25% cancellation charges
            shall be levied on the total price paid. No refunds are permitted if
            cancellatons are made within 48 hours prior to the intended date of
            visit. Partial cancellations or modifications are not permitted.
            <br />
            No refunds are admissible on cancellation or alteration of vehicle
            bookings and addons.
            <br />
            <br />
            <span className="font-semibold">Breach</span> In case of breach of
            the Terms of Use or Privacy Policy or other rules and regulations,
            FunWorld may limit activity of the User, immediately remove his
            information, warn other Users of his actions, temporarily /
            indefinitely suspend or terminate or block his membership, and / or
            refuse the User access to the Website, in addition to the other
            remedies available to FunWorld under the law, or FunWorld failure to
            verify or authenticate any information provided by the User; or if
            it is believed that actions of the User may cause legal liability
            for him, other users or FunWorld . FunWorld may, at any time, in its
            sole discretion reinstate access to suspended User/s. A User who has
            been suspended or blocked may not register or attempt to re-register
            or use this Website in any manner whatsoever until such time that
            such user’s access is reinstated by FunWorld . Notwithstanding the
            foregoing, FunWorld reserves the right to recover any amounts due
            and unsettled by the User, if any, and take strict legal action
            including referring such matter to the appropriate police or other
            authorities for initiating criminal or other proceedings against the
            User.
            <br />
            <br />
            <span className="font-semibold">Indemnity</span> The User shall
            indemnify and hold harmless FunWorld , FunWorld Theme Park, FunWorld
            Water Park, Novotel FunWorld its owner, licensees, affiliates,
            subsidiaries, group companies (as applicable) and their respective
            officers, directors, agents, and employees, from any claim or demand
            or actions, including reasonable attorneys’ fees, made by any third
            party or penalty imposed due to or arising out of breach of these
            Terms of Use and Privacy Policy by him, or violation of any law,
            rules or regulations or the rights of a third party or any other
            User.
            <br />
            <br />
            <span className="font-semibold">Applicable Law</span> This Agreement
            shall be governed by and interpreted and construed in accordance
            with the laws of India and shall be submitted to the exclusive
            jurisdiction of the courts at Bengaluru.
            <br />
            <br />
            <span className="font-semibold">Copyright complaint</span> FunWorld
            value others’ intellectual property. In case the User finds that his
            work has been copied in a way that constitutes copyright
            infringement, he may please write to FunWorld
            contactus@funworldblr.com.
            <br />
            <br />
            <span className="font-semibold">Risk of loss</span> All items
            purchased on the Website are made pursuant to a shipment contract.
            This means that the risk of loss and title for such items pass to
            the User upon delivery to the carrier.
            <br />
            <br />
            <span className="font-semibold">LIMITATION OF LIABILITY</span> Use
            of this website is entirely at the user’s own risk. FunWorld has
            provided this website and any information and content herein,
            strictly on “AS IS” basis without any express warranties. Further,
            to the fullest extent permitted by applicable law, FunWorld excludes
            all liability for any direct, indirect, incidental, special or
            consequential damages, including damages for loss of profits,
            goodwill, use, data or other intangible losses resulting from (1)
            the use or the inability to use this website; (2) the cost of
            procurement of substitute goods and / or services resulting from any
            goods or services purchased or obtained or transactions entered into
            through or from this website; or (3) unauthorized access or
            alteration of the users transmissions or data, even if FunWorld has
            been advised of the possibility of such damages. The User further
            agrees that FunWorld is not responsible or liable to user for any
            threatening, defamatory, obscene, offensive or illegal conduct of
            other users or any infringement of others’ rights, including
            intellectual property rights, occurring on or through this website.
            If the user is dissatisfied with the use of this website or the
            materials available on it or with the terms of use, the user’s sole
            and exclusive remedy is to discontinue using the website. Without
            limiting any other provision of the terms of use, to the extent that
            any warranty of liability cannot be excluded, FunWorld total
            liability is limited: to (1) the supply of the services / products
            provided herein and / or (2) payment of the cost towards services /
            products supplied.
            <br />
            <br />
            <span className="font-semibold">TICKETING RULES:</span> All
            Government and Public Holidays – Weekend Ticket Prices Applicable.
            <br />
            <br />
            <span className="font-semibold">Our Contact</span> Please send any
            questions or comments regarding this Website to
            contactus@Funworldblr.com
            <br />
            <br />
            <span className="font-semibold">
              FUN WORLD AND RESORTS INDIA PVT LTD
            </span>
            <br />
            Palace Grounds, Jayamahal Main Rd,
            <br />
            Opposite TV Tower, J.C.Nagar,
            <br />
            Bengaluru, Karnataka 560006
            <br />
            <br />
            <br />
            Phone: +91 8431110000
            <br />
            E-mail: info@funworldblr.com
            <br />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Terms;
