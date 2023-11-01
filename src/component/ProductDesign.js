import React, { useState } from "react";
import PortfolioAccordion from "./PortfolioAccordion";
import ScrollAnimation from "react-animate-on-scroll";
import { motion as m } from "framer-motion";

const ProductDesign = () => {
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
        {/* <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}> */}
        <h3 className="text-[14px] md:text-[24px] animate__fadeInLeft  animate__animated lg:text-[28px] text-white w-full ">
          I strive for the perfect balance between form and function in my work.
          Simplicity is at the core of my design ideology, where every element
          has a purpose. My style is uniquely defined by uncluttered aesthetics,
          characterized by clean lines, shapes, and fonts.
        </h3>
        {/* </ScrollAnimation> */}
      </div>
      <div className=" border-t pt-[24px] pb-[28px]  md:pt-[80px] md:pb-[80px] ">
        <div className=" flex justify-between gap-[10%] w-full">
          <div className="flex flex-col justify-center w-full">
            <div className="w-full">
              <h2 className="text-[#BABABA] text-[22px] font-medium md:text-[36px] lg:text-[56px] tracking-tighter">
                AFRILEISURE COLLECTION: SO X TDA{" "}
              </h2>{" "}
            </div>
          </div>

          <div>
            <div className="text-[#BABABA] text-[24px] hidden lg:block ">
              <p className="text-right">Client:</p>
              <p className="whitespace-nowrap">TDA x Samuel Otigba</p>
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
            <p className="whitespace-nowrap">TDA x Samuel Otigba</p>
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
            {" "}
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              {" "}
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  I had the privilege of collaborating with Africa's Leading
                  Sports Brand, AFA Sports, to bring you a collection that
                  seamlessly blends traditional African wear with sports
                  athleisure fabrics and comfort. The result? Modern,
                  easy-to-wear, and incredibly comfortable clothes suitable for
                  a wide range of activities.
                  <br /> Introducing "AFRILEISURE ™," a term I coined to
                  encapsulate the essence of this groundbreaking collection. I
                  not only designed the logo (Link takes you to Afrileisure
                  logo) but also crafted the entire range, ensuring every piece
                  reflects the perfect balance between African heritage and
                  contemporary fashion.
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
                AFRILEISURE COLLECTION: SO X AFA SPORTS
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
            <p className="whitespace-nowrap">AFA SPORTS</p>
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
            {" "}
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              {" "}
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  I had the privilege of collaborating with Africa's Leading
                  Sports Brand, AFA Sports, to bring you a collection that
                  seamlessly blends traditional African wear with sports
                  athleisure fabrics and comfort. The result? Modern,
                  easy-to-wear, and incredibly comfortable clothes suitable for
                  a wide range of activities.
                  <br /> Introducing "AFRILEISURE ™," a term I coined to
                  encapsulate the essence of this groundbreaking collection. I
                  not only designed the logo (Link takes you to Afrileisure
                  logo) but also crafted the entire range, ensuring every piece
                  reflects the perfect balance between African heritage and
                  contemporary fashion.
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
              OLYMPICS NIGERIA BASKETBALL JERSEY 2021
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
            <p className="whitespace-nowrap">AFA SPORTS</p>
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
                      Someone said, “ In most sci-fi movies, there are no
                      Africans in the future”. My designs are to change that
                      narrative.
                      <br />
                      Africa is the future
                      <br />
                      So I designed seamless, functional gears inspired by the
                      authenticity of our culture, displayed daily through the
                      show of resilience and the richness of our motifs.
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
                    <p className="text-sm">African, Bold, Daring, Futuristic</p>
                  </div>
                </div>
              </m.div>
            ) : (
              ""
            )}
      </div>
      {/* <div>
        <PortfolioAccordion
          company={"AFRILEISURE COLLECTION: SOxTDA"}
          client={"TDAxSAMUEL OTIGBA"}
        />
        <PortfolioAccordion
          company={"AFRILEISURE COLLECTION: SOxAFA SPORTS"}
          client={"AFA SPORTS"}
        />
        <PortfolioAccordion
          company={"OLYMPICS NIGERIA BASKETBALL JERSEY 2021"}
          client={"AFA SPORTS"}
        />
      </div> */}
    </div>
  );
};

export default ProductDesign;
