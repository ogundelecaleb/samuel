import React,{useState} from "react";
import PortfolioAccordion from "./PortfolioAccordion";
import { motion as m } from "framer-motion";

const Branding = () => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);
  const [expand6, setExpand6] = useState(false);
  const [expand7, setExpand7] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);
  const [more4, setMore4] = useState(false);
  const [more5, setMore5] = useState(false);
  const [more6, setMore6] = useState(false);
  return (
    <div>
      <div className="pb-[24px] md:pb-[48px] lg:pb-[64px]  lg:pt-[24px] border-b-white">
        <h3 className="text-[14px] md:text-[24px] animate__fadeInLeft  animate__animated lg:text-[28px] text-white w-full ">
          At the heart of my branding approach lies a harmonious blend of
          creativity and strategy. I believe in crafting brand identities that
          are both visually captivating and strategically impactful. With a
          focus on simplicity and coherence, my designs aim to communicate brand
          messages clearly and leave a lasting impression.
        </h3>
      </div>
      <div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[80px] md:pb-[80px] ">
          <div className=" flex justify-between gap-[10%] w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="w-full">
                <h2 className="text-[#BABABA] text-[22px] font-medium md:text-[36px] lg:text-[56px] tracking-tighter">
                  BEZI BRAND REFRESH{" "}
                </h2>{" "}
              </div>
            </div>

            <div>
              <div className="text-[#BABABA] text-[24px] hidden lg:block ">
                <p className="text-right">Client:</p>
                <p className="whitespace-nowrap">BEZI</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => {
                setExpand1(!expand1);
              }}
              className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white max-w-[100px] md:max-w-[120px] group"
            >
              <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                {expand1 === true ? "Collapse" : "Expand"}
              </span>
            </button>
            <div className="text-[#BABABA] text-24px block lg:hidden ">
              <p className="text-right">Client:</p>
              <p className="whitespace-nowrap">BEZI</p>
            </div>
          </div>
          {expand1 === true ? (
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.3,
              }}
            >
              <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                <div className="w-full md:w-[50%]">
                  <h3 className="mt-2">ABOUT</h3>{" "}
                  <p className="text-sm">
                    The Bezi brand is a one-stop-shop to help start, fund, and
                    effectively scale hundreds of thousands of Africans
                    companies.
                    <br />
                    The brand refresh goes beyond a mere fresh coat of paint; it
                    encompasses a holistic transformation of our visual
                    identity. Led by my expertise, we have meticulously updated
                    and altered elements such as the logo, styles, fonts,
                    textures, and color palette. These enhancements breathe new
                    life into our brand, ensuring it remains relevant and
                    impactful in the ever-evolving business landscape. <br />
                    Additionally, an updated brand book was developed, serving
                    as a comprehensive guide that defines the visual language
                    and provides guidelines for consistency across all
                    touchpoints. From business cards to letterheads, every
                    aspect of our brand's visual representation has been
                    carefully considered. Furthermore, we have crafted a new
                    website wireframe, strategically designed to enhance the
                    user experience and effectively communicate Bezi’s mission
                    and services. <br /> <br />
                    Bezi’s brand's aesthetic has been elevated to align with its
                    mission and resonate with its target audience.
                  </p>
                </div>

                <div>
                  <h3 className="mt-2">INDUSTRY</h3>
                  <p className="text-sm"> aaS</p>

                  <h3 className="mt-2">SERVICE</h3>
                  <p className="text-sm"> Brand Refresh</p>
                </div>
                <div>
                  <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                  <p className="text-sm">
                    Elevated, Vibrant, Modern, Cohesive, Dynamic.
                  </p>
                </div>
              </div>
            </m.div>
          ) : (
            ""
          )}
        </div>

        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[80px] md:pb-[80px] ">
          <div className=" flex justify-between gap-[10%] w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="w-full">
                <h2 className="text-[#BABABA] text-[22px] font-medium md:text-[36px] lg:text-[56px] tracking-tighter">
                  AFRILEISURE LOGO{" "}
                </h2>{" "}
              </div>
            </div>

            <div>
              <div className="text-[#BABABA] text-[24px] hidden lg:block ">
                <p className="text-right">Client:</p>
                <p className="whitespace-nowrap">AFA SPORTS</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => {
                setExpand2(!expand2);
              }}
              className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white max-w-[100px] md:max-w-[120px] group"
            >
              <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                {expand2 === true ? "Collapse" : "Expand"}
              </span>
            </button>
            <div className="text-[#BABABA] text-24px block lg:hidden ">
              <p className="text-right">Client:</p>
              <p className="whitespace-nowrap">AFA SPORTS</p>
            </div>
          </div>
          {expand2 === true ? (
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.3,
              }}
            >
              <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                <div className="w-full md:w-[50%]">
                  <h3 className="mt-2">ABOUT</h3>{" "}
                  <p className="text-sm">
                    Creating a logo was inevitable after coining the name
                    ‘Afrileisure’ for my design collection ( The Afrileisure
                    Collection) (another hyperlink) with AFA Sports, Africa’s
                    leading Sports and Athleisure Brand.
                    <br />
                    Inspired by the ancient Igbo hieroglyphics called ‘Nsibidi’
                    .
                  </p>
                </div>

                <div>
                  <h3 className="mt-2">INDUSTRY</h3>
                  <p className="text-sm"> Sports and Athleisure</p>

                  <h3 className="mt-2">SERVICE</h3>
                  <p className="text-sm"> Branding Identity</p>
                </div>
                <div>
                  <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                  <p className="text-sm"> African, Bold, Daring, Futuristic</p>
                </div>
              </div>
            </m.div>
          ) : (
            ""
          )}
        </div>

        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[80px] md:pb-[80px] ">
          <div className=" flex justify-between gap-[10%] w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="w-full">
                <h2 className="text-[#BABABA] text-[22px] font-medium md:text-[36px] lg:text-[56px] tracking-tighter">
                  DJ OBI ILLUSTRATION{" "}
                </h2>{" "}
              </div>
            </div>

            <div>
              <div className="text-[#BABABA] text-[24px] hidden lg:block ">
                <p className="text-right">Client:</p>
                <p className="whitespace-nowrap">Obi Ajounuma</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => {
                setExpand3(!expand3);
              }}
              className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white max-w-[100px] md:max-w-[120px] group"
            >
              <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                {expand3 === true ? "Collapse" : "Expand"}
              </span>
            </button>
            <div className="text-[#BABABA] text-24px block lg:hidden ">
              <p className="text-right">Client:</p>
              <p className="whitespace-nowrap">Obi Ajounuma</p>
            </div>
          </div>
          {expand3 === true ? (
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.3,
              }}
            >
              <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                <div className="w-full md:w-[50%]">
                  <h3 className="mt-2">ABOUT</h3>{" "}
                  <p className="text-sm">
                    DJ Obi is a Nigerian disc jockey and Syndik8 Records
                    official DJ. He won Best World DJ at the 2011 Nigeria
                    Entertainment Awards. He was nominated for 2016 The Future
                    Awards Africa Prize for Creative Professional.
                    <br />I was commissioned to create an Illustration that
                    Embodies his brand. Here’s what i came up with
                  </p>
                </div>

                <div>
                  <h3 className="mt-2">INDUSTRY</h3>
                  <p className="text-sm"> Entertainment</p>

                  <h3 className="mt-2">SERVICE</h3>
                  <p className="text-sm"> Collection Design/ Collaboration</p>
                </div>
                <div>
                  <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                  <p className="text-sm"> Cool and Artsy</p>
                </div>
              </div>
            </m.div>
          ) : (
            ""
          )}
        </div>

        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[80px] md:pb-[80px] ">
          <div className=" flex justify-between gap-[10%] w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="w-full">
                <h2 className="text-[#BABABA] text-[22px] font-medium md:text-[36px] lg:text-[56px] tracking-tighter">
                LYNXXX ILLUSTRATION{" "}
                </h2>{" "}
              </div>
            </div>

            <div>
              <div className="text-[#BABABA] text-[24px] hidden lg:block ">
                <p className="text-right">Client:</p>
                <p className="whitespace-nowrap">Chukie Edozien (Lynxxx)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => {
                setExpand4(!expand4);
              }}
              className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white max-w-[100px] md:max-w-[120px] group"
            >
              <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                {expand4 === true ? "Collapse" : "Expand"}
              </span>
            </button>
            <div className="text-[#BABABA] text-24px block lg:hidden ">
              <p className="text-right">Client:</p>
              <p className="whitespace-nowrap">Chukie Edozien (Lynxxx)</p>
            </div>
          </div>
          {expand4 === true ? (
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.3,
              }}
            >
              <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                <div className="w-full md:w-[50%]">
                  <h3 className="mt-2">ABOUT</h3>{" "}
                  <p className="text-sm">
                    Lynxxx is a Nigerian hip-hop recording artist, pepsi
                    ambassador and entrepreneur.
                    <br />I was commissioned to create an Illustration of him
                    and a song cover.. Here’s what i came up with
                  </p>
                </div>

                <div>
                  <h3 className="mt-2">INDUSTRY</h3>
                  <p className="text-sm">Entertainment</p>

                  <h3 className="mt-2">SERVICE</h3>
                  <p className="text-sm"> Branding Identity</p>
                </div>
                <div>
                  <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                  <p className="text-sm">
                    {" "}
                    Infusion of basketball, bold colors and the city that never
                    sleeps, Lagos.
                  </p>
                </div>
              </div>
            </m.div>
          ) : (
            ""
          )}
        </div>

       

        
        {/* <PortfolioAccordion
          company={"BEZI BRAND REFRESH"}
          client={"Bezi"}
        />
        <PortfolioAccordion
          company={"AFRILEISURE LOGO"}
          client={"AFA SPORTS"}
        />
        <PortfolioAccordion
          company={"dj obi illustration"}
          client={"Obi Ajounuma"}
        />
         <PortfolioAccordion
          company={"LYNXXX ILLUSTRATION AND SONG COVER"}
          client={"Chukie Edozien (Lynxxx)"}
        /> */}
      </div>
    </div>
  );
};

export default Branding;
