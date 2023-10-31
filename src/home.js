/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";
import Clock from "../component/clock";
import emailjs from "@emailjs/browser";
import ""

import { Form } from "react-router-dom";

const Home = () => {
  const currTime = new Date().toLocaleTimeString();
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);
  const [expand6, setExpand6] = useState(false);
  const [expand7, setExpand7] = useState(false);
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);
  const [more4, setMore4] = useState(false);
  const [more5, setMore5] = useState(false);
  const [more6, setMore6] = useState(false);
  const [contactbox, setContactBox] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a 5-second delay
  //   const loadingTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(loadingTimeout);
  //   };
  // }, []);

  const bottomEl = useRef();
  const topEl = useRef(null);

  const scrollingTop = (event) => {
    const elmnt = topEl;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  const scrollingBottom = (event) => {
    const elmnt = bottomEl;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11whge8",
        "template_7po7vxc",
        form.current,
        "_4uaal6BIvDKfqqqT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    topEl?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (ref) => {
    setTimeout(
      () =>
        ref.current.scrollIntoView({ inline: "center", behavior: "smooth" }),
      777
    );
  };

  // const handleRotate1 () {

  // }

  return (
    <div className="relative">
      <m.div
        initial={{ x: -500, scale: 0, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          type: "ease",
          duration: 1.3,
        }}
      >
        <section
          id="hero"
          ref={topEl}
          className="bgImage relative  h-[900px] bg-no-repeat bg-cover sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]"
        >
          <div className="w-full h-full top-0 left-0 absolute bg-[#000000] bg-opacity-[33%] z-10"></div>
          <div className="flex items-center justify-between">
            <div>
              {" "}
              <h2 className="text-xl font-extrabold text-[#fff] ">
                Samuel <br /> Otigba.{" "}
              </h2>
            </div>

            <div className="hidden md:block">
              <p className="text-white flex">
                <Clock />
                -WAT
              </p>
            </div>

            <button
              onClick={() => {
                scrollingBottom();
                setContactBox(!contactbox);
              }}
              className="px-3 py-2 z-20 rounded-xl border-white border text-[14px] text-white transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
            >
              CONTACT ME
            </button>
          </div>

          <div className="mt-[100%] md:mt-[325px] md:w-[50%] lg:w-[40%]">
            <p className="text-white md:text-[24px]  ">
              Hi! 👋 <br />I am Samuel Otigba, a daily Product Growth and
              Marketing Specialist and also a Product/ Industrial designer every
              other night. I am a visionary(Sam calls me that LOL) who currently
              lives in Lagos, Nigeria.
            </p>
          </div>

          <button
            onClick={scrollingBottom}
            className="text-white absolute font-bold cursor-pointer flex gap-1 items-center bottom-[24px] z-20 left-[16px]  md:bottom-[32px] md:left-[48px]"
          >
            <p>scroll down</p>{" "}
            <AiOutlineArrowDown className="animate-bounce " />
          </button>
        </section>
      </m.div>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <h3 className="text-[40px] md:text-[70px] font-extrabold">//About</h3>

        <ul className="flex justify-center flex-col  md:max-w-[90%] lg:max-w-[80%]  text-[18px] md:text-[28px] lg:text-[48px] mx-auto">
          <li className="flex items-center tracking-wide ">
            {" "}
            I &nbsp;
            <svg
              onClick={() => setRotate1(!rotate1)}
              className={`h-[18px] w-[18px] md:h-[30px] md:w-[30px]   lg:h-[48px] lg:w-[48px]  cursor-pointer  duration-700 ${
                rotate1 ? "rotate-90" : ""
              } `}
              // width="20"
              // height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 24C44 35.04 35.04 44 24 44C12.96 44 6.22 32.88 6.22 32.88M6.22 32.88H15.26M6.22 32.88V42.88M4 24C4 12.96 12.88 4 24 4C37.34 4 44 15.12 44 15.12M44 15.12V5.12M44 15.12H35.12"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            &nbsp;{" "}
            {rotate1
              ? "am currently living in Lagos, NG"
              : "lived in Manchester, UK"}{" "}
          </li>
          <li className="tracking-wide">
            {" "}
            <p> I am a sophisticated lover of all things beautiful. </p>
          </li>
          <li className="tracking-wide">
            I enjoy cooking. Oh hey! Check out{" "}
            <a
              href="https://instagram.com/blvckapron_?igshid=NTc4MTIwNjQ2YQ== "
              target="blank"
              className="underline"
            >
              Blvck Apron
            </a>
          </li>
          <li className="tracking-wide">
            I constantly challenge myself to create unique and engaging
            contents.
          </li>

          <li className="flex items-center tracking-wide">
            {" "}
            I &nbsp;
            <svg
              onClick={() => setRotate2(!rotate2)}
              className={`h-[18px] w-[18px] md:h-[30px] md:w-[30px]   lg:h-[48px] lg:w-[48px]  cursor-pointer  duration-700 ${
                rotate2 ? "rotate-90" : ""
              } `}
              // width="20"
              // height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 24C44 35.04 35.04 44 24 44C12.96 44 6.22 32.88 6.22 32.88M6.22 32.88H15.26M6.22 32.88V42.88M4 24C4 12.96 12.88 4 24 4C37.34 4 44 15.12 44 15.12M44 15.12V5.12M44 15.12H35.12"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            &nbsp;{" "}
            {rotate2
              ? "am obsessed with Marvel comics"
              : "watch a lot of movies."}{" "}
          </li>
          <li className="tracking-wide">I love teaching digital designs</li>
        </ul>

        <div className="flex md:justify-end justify-start mt-[64px]">
          {" "}
          <p className="md:text-[24px] text-[16px] md:max-w-[548px]">
            I am also a digital philanthropist who enjoys giving out with job
            opportunities.
          </p>
        </div>
      </section>

      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="mb-[24px] md:mb-[80px]">
          <h2 className="text-[40px] md:text-[70px] font-bold ">
            //Selected Works
          </h2>
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px]">
                AFRILEISURE COLLECTION
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand1(!expand1);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand1 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA] text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>AFA SPORTS</p>
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
                    easy-to-wear, and incredibly comfortable clothes suitable
                    for a wide range of activities.
                    <br /> Introducing "AFRILEISURE ™," a term I coined to
                    encapsulate the essence of this groundbreaking collection. I
                    not only designed the logo (Link takes you to Afrileisure
                    logo) but also crafted the entire range, ensuring every
                    piece reflects the perfect balance between African heritage
                    and contemporary fashion.
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
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px]">AFRILEISURE LOGO</h2>{" "}
              <button
                onClick={() => {
                  setExpand2(!expand2);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand2 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>AFA SPORTS</p>
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
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                OLYMPICS NIGERIA BASKETBALL 2021
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand3(!expand3);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand3 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>AFA SPORTS</p>
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
                    Someone said, “ In most sci-fi movies, there are no Africans
                    in the future”. My designs are to change that narrative.
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
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                BEZI BRAND REFRESH
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand4(!expand4);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand4 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>BEZI</p>
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
                  <p className="text-sm">Elevated, Vibrant, Modern, Cohesive, Dynamic.</p>
                </div>
              </div>
            </m.div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                DJ OBI ILLUSTRATION
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand5(!expand5);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand5 === true ? "Collapse" : "Expand"}
              </button>
            </div>

            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>Obi Ajounuma</p>
            </div>
          </div>

          {expand5 === true ? (
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
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">WACOM </h2>{" "}
              <button
                onClick={() => {
                  setExpand6(!expand6);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand6 === true ? "Collapse" : "Expand"}
              </button>
            </div>

            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>WACOM</p>
            </div>
          </div>

          {expand6 === true ? (
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
                    I had the privilege of collaborating with Africa's Leading
                    Sports Brand, AFA Sports, to bring you a collection that
                    seamlessly blends traditional African wear with sports
                    athleisure fabrics and comfort. The result? Modern,
                    easy-to-wear, and incredibly comfortable clothes suitable
                    for a wide range of activities. <br /> Introducing
                    "AFRILEISURE ™," a term I coined to encapsulate the essence
                    of this groundbreaking collection. I not only designed the
                    logo (Link takes you to Afrileisure logo) but also crafted
                    the entire range, ensuring every piece reflects the perfect
                    balance between African heritage and contemporary fashion.
                  </p>
                </div>

                <div>
                  <h3 className="mt-2">INDUSTRY</h3>
                  <p className="text-sm"> Sports and Athleisure</p>

                  <h3 className="mt-2">SERVICE</h3>
                  <p className="text-sm"> Collection Design/ Collaboration</p>
                </div>
                <div>
                  <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                  <p className="text-sm">
                    {" "}
                    Breathable, Cotton-Polyester Mesh, Eco-friendly, Easy care,
                    Washing machine friendly, wash and wear.
                  </p>
                </div>
              </div>
            </m.div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                LYNXXX ILLUSTRATION{" "}
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand7(!expand7);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
              >
                {expand7 === true ? "Collapse" : "Expand"}
              </button>
            </div>

            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>Chukie Edozien(Lynxxx)</p>
            </div>
          </div>

          {expand7 === true ? (
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
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className=" mb-[24px] md:mb-[80px]">
          <h2 className="text-[40px] md:text-[70px] font-bold ">
            //MY JOURNEY
          </h2>
        </div>

        <div>
          <p className=" text-[18px] md:text-[48px] text-white">
            Here is where I get to be quite serious. <br /> I’ve gone through
            quite a number of phases in my career life, and each of them has
            shaped my current work ethos and philosophy. <br /> I have excelled
            in a number of project management roles in diverse industries, and
            believe that my number one asset is my ability to adapt to any
            challenge that is thrown my way.
          </p>

          {/* places worked */}
          <div className="mt-[40px]">
            <div>
              <div className="flex flex-row justify-between">
                {" "}
                <div className="flex flex-col">
                  <p className="text-[18px] md:text-[24px]">BEZI</p>{" "}
                  <p className=" italic text-[18px] md:text-[24px] max-w-[70%]">
                    Chief Growth Officer
                  </p>{" "}
                  <p className="md:text-[20px] text-[14px]">
                    Jan ‘23 - Present
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMore1(!more1);
                    }}
                    className="border border-white py-2 px-3 rounded-[40px] max-w-[200px] text-[12px] md:text-[18px] tracking-wide transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
                  >
                    {more1 === true ? "VIEW LESS" : "VIEW MORE"}
                  </button>
                </div>
              </div>
              {more1 === true ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1.3,
                  }}
                >
                  <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                    <p>
                      In March 2019, I got an offer!
                      <br />
                      All I kept saying was “I am in!”
                      <br />
                      AvanteFly is a Private charter and luxury lifestyle
                      management Startup Company. Quite an interesting one you
                      know…
                      <br />
                      I get to oversee the day-to-day administrative and
                      operational functions at AvanteFly. This basically
                      involves a lot of Strategy Implementation, Policy
                      Establishments, Relationship Managements , Performance
                      Analyzation, Expansion Evaluation and Team Building.
                      <br />
                      <br />
                      I’ve got my sleeves rolled up for this one!
                    </p>
                  </div>
                </m.div>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="flex flex-row justify-between mt-[32px]">
                {" "}
                <div className="flex flex-col max-w-[70%]">
                  <p className="text-[18px] md:text-[24px]">Sabee, NPE Meta</p>{" "}
                  <p className=" italic text-[18px] md:text-[24px] ">
                    Product Marketing Manager (Contractual Worker)
                  </p>{" "}
                  <p className="text-[20px]">May ‘23 - Nov '22</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMore2(!more2);
                    }}
                    className="border border-white py-2 px-3 rounded-[40px] max-w-[200px] text-[12px] md:text-[18px] tracking-wide transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
                  >
                    {more2 === true ? "VIEW LESS" : "VIEW MORE"}
                  </button>
                </div>{" "}
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between mt-[32px]">
                {" "}
                <div className="flex flex-col max-w-[70%]">
                  <p className="text-[18px] md:text-[24px]">AVANTEFLY</p>{" "}
                  <p className=" italic text-[18px] md:text-[24px]">
                    Chief Product Information Officer
                  </p>{" "}
                  <p className="text-[20px]">Since March 2021</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMore3(!more3);
                    }}
                    className="border border-white py-2 px-3 rounded-[40px] max-w-[200px] text-[12px] md:text-[18px] tracking-wide transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
                  >
                    {more3 === true ? "VIEW LESS" : "VIEW MORE"}
                  </button>
                </div>
              </div>
              {more3 === true ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1.3,
                  }}
                >
                  <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                    <p>
                      In March 2019, I got an offer!
                      <br />
                      All I kept saying was “I am in!”
                      <br />
                      AvanteFly is a Private charter and luxury lifestyle
                      management Startup Company. Quite an interesting one you
                      know…
                      <br />
                      I get to oversee the day-to-day administrative and
                      operational functions at AvanteFly. This basically
                      involves a lot of Strategy Implementation, Policy
                      Establishments, Relationship Managements , Performance
                      Analyzation, Expansion Evaluation and Team Building.
                      <br />
                      <br />
                      I’ve got my sleeves rolled up for this one!
                    </p>
                  </div>
                </m.div>
              ) : (
                ""
              )}{" "}
            </div>
            <div>
              <div className="flex flex-row justify-between mt-[32px]">
                {" "}
                <div className="flex flex-col max-w-[70%]">
                  <p className="text-[18px] md:text-[24px]">Smart Edge</p>{" "}
                  <p className=" italic text-[18px] md:text-[24px]">
                    Senior Partner (Client Development)/Business Consultant)
                  </p>{" "}
                  <p className="text-[20px]">Oct '19 - Jan '21</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMore4(!more4);
                    }}
                    className="border border-white py-2 px-3 rounded-[40px] max-w-[200px] text-[12px] md:text-[18px] tracking-wide transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
                  >
                    {more4 === true ? "VIEW LESS" : "VIEW MORE"}
                  </button>
                </div>{" "}
              </div>
              {more4 === true ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1.3,
                  }}
                >
                  <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                    <p>
                      Building and managing corporate relationships has always
                      been my thing so this role was a perfect fit for me .
                      SmartEdge has the smartest digital team with delivering
                      results which made my job of structuring and driving
                      Client initiative strategies easier. I was able to exceed
                      150% of the planned revenue quota of the company
                      portfolio.
                      <br />
                      <br />I still have a soft spot for SmartEdge and I remain
                      a Consultant for them on a request basis.
                    </p>
                  </div>
                </m.div>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="flex flex-row justify-between mt-[32px]">
                {" "}
                <div className="flex flex-col max-w-[70%]">
                  <p className="text-[18px] md:text-[24px]">CAX Africa</p>{" "}
                  <p className=" italic text-[18px] md:text-[24px]">
                    Head Digital Communications/Digital Marketing Consultant
                  </p>{" "}
                  <p className="text-[20px]">Nov '19 - Jan '20</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMore5(!more5);
                    }}
                    className="border border-white py-2 px-3 rounded-[40px] max-w-[200px] text-[12px] md:text-[18px] tracking-wide transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
                  >
                    {more5 === true ? "VIEW LESS" : "VIEW MORE"}
                  </button>
                </div>{" "}
              </div>
              {more5 === true ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1.3,
                  }}
                >
                  <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                    <p>
                      I worked as a consultant on the Creative African Exchange
                      Programme for 3 months. The buildup to the main event that
                      happened in Kigali Rwanda was an interesting one. Oh and
                      Rwanda is extremely beautiful!
                      <br />I worked closely with the in house marketing team to
                      develop the branding strategy, Led a 15-person team to
                      deliver digital marketing services and the delivery
                      yielded a result of 182% achievement rate! Awesome isn't
                      it?
                    </p>
                  </div>
                </m.div>
              ) : (
                ""
              )}
            </div>{" "}
            <div>
              <div className="flex flex-row justify-between mt-[32px]">
                {" "}
                <div className="flex flex-col max-w-[70%]">
                  <p className="text-[18px] md:text-[24px]">
                    UNITED NATIONS NGO: YOUTH CHARTER
                  </p>{" "}
                  <p className=" italic text-[18px] md:text-[24px]">
                    Digital Advisory Board Member
                  </p>{" "}
                  <p className="text-[20px]">Oct '17 - Sep '19</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMore6(!more6);
                    }}
                    className="border border-white py-2 px-3 rounded-[40px] max-w-[200px] text-[12px] md:text-[18px] tracking-wide transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
                  >
                    {more6 === true ? "VIEW LESS" : "VIEW MORE"}
                  </button>
                </div>{" "}
              </div>
              {more6 === true ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1.3,
                  }}
                >
                  <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
                    <p>
                      In the earlier days of my journey here, I led the
                      strategic planning process for the UI/UX design and how
                      people interact with content. Coordinated the development
                      and execution of communication materials such as blog,
                      websites and social media marketing. <br />
                      Also tapped into my business side and got involved in the
                      development, deployment of the company’s long and short
                      term business model that identifies new business
                      opportunities, markets and partners.
                      <br />
                      Interesting Fact: I did over 300 designs for the UN NGO
                      Youth Charter. I’ve got some here
                      <br />
                      <br />
                      Still a sitting advisory board member !
                    </p>
                  </div>
                </m.div>
              ) : (
                ""
              )}
            </div>
            <a href="/Samuel Otigba CV.pdf" download="Samuel Otigba CV">
              <button className="px-3 py-2 text-center text-[12px] md:text-[18px] border rounded-[40px] border-white max-w-[150px] mt-[32px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom">
                VIEW RESUME
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="md:min-h-[586px] min-h-[190px] relative  text-white bg-[#111111] ">
          <div className="absolute top-[30%] md:top-0 left-0 right-0">
            <img
              src="/contribution.png"
              alt="contribution"
              className="md:h-[586px] h-[171px] w-[100%] object-contain"
            />
          </div>
          <div className="md:h-[586px] flex md:justify-center h-full items-center py-auto">
            {" "}
            <h2 className="text-[40px] md:text-[70px] font-bold text-[#BABABA]">
              //CONTRIBUTION
            </h2>
          </div>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div>
          <h2 className="text-[40px] md:text-[70px] font-bold text-center text-[#BABABA]">
            //AWARDS
          </h2>
        </div>
        <Marquee pauseOnHover={true} className="mb-5">
          <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
            DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .
          </p>
        </Marquee>
        <Marquee pauseOnHover={true} direction="right">
          <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
            DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .
          </p>
        </Marquee>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <h2 className="text-[40px] text-white font-bold">
          Let’s talk about a project, collaboration or an idea you may have 😉
        </h2>
        <button
          onClick={() => {
            setContactBox(!contactbox);
          }}
          className="px-3 py-2 text-center text-[12px] md:text-[18px] border rounded-[40px] border-white max-w-[150px] mt-[32px] transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom"
        >
          REACH ME
        </button>
      </section>
      <section
        ref={bottomEl}
        className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] "
      >
        <div className="px-[24px] py-[16px] bg-[#fff] bg-opacity-[80%] ">
          <p className="mb-[40px] text-black">
            Bonus stuff: This portfolio website was purely designed for the
            purpose of showcasing my works and achievements. However, as someone
            that claim to have a romantic soul, I have a micropage which
            explores my gallery.
          </p>
          <p className="text-black ">SAMUEL OTIGBA</p>
          <img src="/barcode.png" alt="barcode" />
        </div>
      </section>
      <section className="pt-[40px] pb-4 md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="flex items-center justify-between mb-[24px] text-[#ffffff]">
          <p className="text-[14px] tracking-wide font-light">
            © 2023 All Rights Reserved.
          </p>

          <button onClick={scrollingTop} className="flex items-center gap-2">
            BACK TO TOP <AiOutlineArrowUp className="animate-bounce " />
          </button>
        </div>
        <div className="px-2">
          <p className="text-[#ffffff] text-center text-[12px] tracking-wide font-light">
            WITH ❤️{" "}
            <a href="https://eaglion.co" target="_blank">
              FROM EAGLION GLOBAL TECHNOLOGIES LTD.
            </a>
          </p>
        </div>
      </section>
      {contactbox ? (
        <m.div
          initial={{ z: -500 }}
          animate={{ z: 1 }}
          transition={{
            type: "ease",

            delay: 1.5,
            duration: 1.5,
          }}
          className="absolute bottom-0 w-full"
        >
          <div className="pt-[40px] relative md:pt-[104px] px-[16px] md:px-[48px] text-[#000] bg-[#FFF] pb-[32px] ">
            <button
              onClick={() => {
                setContactBox(!contactbox);
              }}
              className="absolute right-5 top-7"
            >
              close
            </button>
            <h2 className="text-[24px] md:text-[72px] font-bold">
              READY TO GET IN TOUCH
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col md:flex-row w-full md:max-w-[70%] gap-5 mb-[70px] mt-5"
            >
              <div className="w-full">
                <div className="flex flex-col mb-3 gap-2">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="w-full border py-2 px-3 rounded-lg"
                  />
                </div>
                <div className="flex flex-col  gap-2">
                  <label>Subject</label>
                  <input
                    placeholder="Subject"
                    type="text"
                    className="w-full border py-2 px-3 rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col mb-3 gap-2">
                  <label>Enter email address</label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    className="w-full border py-2 px-3 rounded-lg"
                  />
                </div>
                <div className="flex flex-col mb-3 gap-2">
                  <label>Message</label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="border rounded-lg py-2 px-3 min-h-[120px]  md:min-h-[200px]"
                  />
                </div>

                <button
                  type="submit"
                  className="text-black px-3 py-2 border border-[#000] rounded-[24px] mt-[28px]"
                >
                  GET IN TOUCH
                </button>
              </div>
            </form>

            <p className="max-w-[90%] md:max-w-[35%]">
              Fill out the form below with as many details as possible and I'll
              get back to you asap. Stoked to hear from you!
            </p>
          </div>
        </m.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
