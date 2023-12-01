import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import ProductDesign from "./component/ProductDesign";
import JourneyAccordion from "./component/JourneyAccordion";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import Branding from "./component/Branding";
import Marketing from "./component/Marketing";
import Brands from "./component/Brands";
import Rounded from "./common/RoundedButton";
import { useInView, motion } from "framer-motion";
import styles from "./style.module.scss";
import Magnetic from "./common/Magnetic";
import { gsap, Power3 } from "gsap";
import { RevolveButton } from "./common/RevolveButton";
import emailjs from "@emailjs/browser";
import Dnd from "./component/Dnd";
import { WindupChildren } from "windups";

const Layout = () => {
 
  const [more3, setMore3] = useState(false);
  const [more4, setMore4] = useState(false);
  const [more5, setMore5] = useState(false);
  const [more6, setMore6] = useState(false);
  const [product, setProduct] = useState("productdesign");
  const [menu, setMenu] = useState("portfolio");
  const [open, setOpen] = useState(false);
  const [contactbox, setContactBox] = useState(false);
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

  let logo = useRef(null);
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

  // let menu_item1 = useRef(null);
  // let menu_item2 = useRef(null);
  // let menu_item3 = useRef(null);
  const timeline = gsap.timeline();
  // let ease = Power3.easeOut;
  useEffect(() => {
    timeline.to(logo, 1, {
      opacity: 0,
      y: "100",
    });
    // timeline.from([menu_item1, menu_item2, menu_item3], 2 ,{
    //     opacity: 0,
    //     y: -200,
    //     stagger: {
    //         amount: .4
    //     },
    //     ease: ease
    // })
    return () => {};
  }, []);

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };
  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  const phrase =
    " Hi! 👋 <br />I am Samuel Otigba, a daily Product Growth and Marketing Specialist and also a Product/ Industrial designer every other night. I am a visionary(Sam calls me that LOL) who currently lives in Lagos, Nigeria.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div className="relative">
      <section
        id="hero"
        // ref={topEl}
        className=" relative h-[926px] md:h-[900px] bg-no-repeat bg-contain sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]"
      >
        <img
          className="absolute top-0 left-0 -z-10 h-full object-cover hidden md:flex"
          src="/heroImageBig.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover md:hidden "
          src="/heroImagesmall.png"
          alt=""
        />
        <div className="w-full h-full absolute bg-[#000000]/30 left-0 top-0 -z-[8]"></div>

        <div className="flex justify-between items-center">
          <div className="z-10  transition-all duration-500 ease-out will-change-transform">
            <RevolveButton>
              <img src="/logo.png" alt="" />
            </RevolveButton>
          </div>
          <div className={`${menu === "about" ? "hidden" : "block"}`}>
            <Rounded onClick={() => setMenu("about")}>About</Rounded>
          </div>
          <div
            onClick={() => setMenu("portfolio")}
            className={`${menu === "portfolio" ? "hidden" : "block"}`}
          >
            <Rounded>Portfolio</Rounded>
          </div>
        </div>
        <div className="mt-[500px] md:mt-[300px] md:w-[50%] lg:w-[43%]">
          <div className={styles.body}>
            <Magnetic>
              <p className="text-white md:text-[24px] text-left cursor-pointer ">
              <WindupChildren>
               {"Hi! 👋"}  <br /> {" I am Samuel Otigba, a daily Product Growth and Marketing Specialist and also a Product/ Industrial designer every other night. I currently live in Lagos, Nigeria."} </WindupChildren>
              </p>
            </Magnetic>
          </div>
        </div>
        <Magnetic>
          <button
            onClick={scrollingBottom}
            className="text-white text-[16px]  md:text-[24px] absolute  cursor-pointer flex gap-1 items-center bottom-[23px] z-20 left-[16px]  md:bottom-[32px] md:left-[48px]"
          >
            <p>scroll down</p> <AiOutlineArrowDown className=" " />
          </button>
        </Magnetic>
      </section>

      {menu === "portfolio" ? (
        <div>
          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                PORTFOLIO
              </h2>
            </Magnetic>
            <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
              Deliverables from some Marketing & growth initiatives, product
              designs and branding development projects that I’ve led.
            </p>
            <ul className="flex items-center overflow-x-auto py-4 mb-3 gap-[32px]">
              <li>
                <Magnetic>
                  <button
                    onClick={() => setProduct("productdesign")}
                    className={`px-[16px] py-[6px] md:px-[20px] md:py-[16px] whitespace-nowrap  ${
                      product === "productdesign"
                        ? "text-black bg-white"
                        : "text-white border border-[#ffff]"
                    } rounded-[40px] `}
                  >
                    Product Design
                  </button>
                </Magnetic>
              </li>
              <li>
                <Magnetic>
                  <button
                    onClick={() => setProduct("branding")}
                    className={`px-[16px] py-[6px] md:px-[20px] md:py-[16px] whitespace-nowrap  ${
                      product === "branding"
                        ? "text-black bg-white"
                        : "text-white border border-[#ffff]"
                    } rounded-[40px] `}
                  >
                    Branding
                  </button>
                </Magnetic>
              </li>
              <li>
                <Magnetic>
                  <button
                    onClick={() => setProduct("marketing")}
                    className={`px-[16px] py-[6px] md:px-[20px] md:py-[16px] whitespace-nowrap  ${
                      product === "marketing"
                        ? "text-black bg-white"
                        : "text-white border border-[#ffff]"
                    } rounded-[40px] `}
                  >
                    Marketing Growth
                  </button>
                </Magnetic>
              </li>
              <li>
                <Magnetic>
                  <button
                    onClick={() => setProduct("brand")}
                    className={`px-[16px] py-[6px] md:px-[20px] md:py-[16px] whitespace-nowrap  ${
                      product === "brand"
                        ? "text-black bg-white"
                        : "text-white border border-[#ffff]"
                    } rounded-[40px] `}
                  >
                    Brand Collaborations
                  </button>
                </Magnetic>
              </li>
            </ul>
            {}

            {product === "productdesign" && (
              <div>
                <ProductDesign />
              </div>
            )}
            {product === "branding" && (
              <div className="text-white">
                <Branding />
              </div>
            )}
            {product === "marketing" && (
              <div className="text-white">
                <Marketing />
              </div>
            )}
            {product === "brand" && (
              <div className="text-white">
                <Brands />
              </div>
            )}
          </section>

          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                COLLABORATION
              </h2>
            </Magnetic>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOutLeft"
              duration={1.3}
              offset={200}
            >
              <div className=" hidden md:grid grid-cols-5 gap-[40px] ">
              <div className="group relative flex cursor-pointer ">
                  <img
                    src="/amarni.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                    <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Amarni
                      </p>
                    </div>
                  </div>
                </div>


                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/wakanow.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                    <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        wakanow
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/maggi.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                    <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Maggi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/ndanie.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                    <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Ndani TV
                      </p>
                    </div>
                  </div>
                </div>


                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/uba.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        UBA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/* </m.div> */}
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOutRight"
              duration={1.3}
            >
              <div className=" hidden md:grid grid-cols-5 gap-[40px] mt-[40px] ">
               <div className="group relative flex cursor-pointer ">
                  <img
                    src="/marvin.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Marvin Record
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Ninie Lagos
                </div>

                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/essenza.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Essenza
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/piggyvest.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Piggyvest
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/infinix.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                       Infinix
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/freshpep.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className="text-center md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                      FreshPrep by Eros

                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/sunlight.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Sunlight
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/newton.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100 text-center">
                        Newton & David
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/ciroc.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                       Ciroc
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative flex cursor-pointer ">
                  <img
                    src="/goldenpenny.png"
                    alt=""
                    className="rounded-full border border-gray-500 object-cover md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] filter group-hover:grayscale transition duration-300 ease-in-out"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full">
                    <div className="flex items-center  justify-center h-full">
                      <p className=" md:text-[24px] xl:text-3xl font-bold text-black opacity-100">
                        Golden Penny
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <div className=" md:hidden">
              <Marquee pauseOnHover={true} className="mb-5">
                <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
                  ARMANI &nbsp; MARTELL &nbsp; PRIME VIDEO &nbsp; MOET &nbsp;
                  HOUSE OF LUNNETTE &nbsp; SUNLIGHT &nbsp; NEWTON & DAVID &nbsp;
                  CHIVAS &nbsp; WAKA NOW &nbsp; PENNY
                </p>
              </Marquee>
              <Marquee pauseOnHover={true} direction="right" className="mb-5">
                <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
                  SHOWMAX &nbsp; ARMANI &nbsp; BALVENIE &nbsp; CHIVITA &nbsp;
                  TEAM &nbsp; INFINIX &nbsp; CIROC &nbsp; PIGGYVEST &nbsp; WAKA
                  NOW &nbsp; GOLDEN PENNY
                </p>
              </Marquee>
              <Marquee pauseOnHover={true} className="mb-5">
                <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
                  INFINIX &nbsp; CIROC &nbsp; PIGGYVEST &nbsp; WAKA NOW &nbsp;
                  GOLDEN PENNY &nbsp; ARMANI &nbsp; MARTELL &nbsp; PRIME VIDEO
                  &nbsp;
                </p>
              </Marquee>
              <Marquee pauseOnHover={true} direction="right" className="mb-5">
                <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
                  FRESHPREP BY EROS &nbsp; MAGGI &nbsp; ESSENZA &nbsp; UBA
                  &nbsp; CHIVITA &nbsp; TEAM &nbsp; INFINIX &nbsp; CIROC &nbsp;
                  PIGGYVEST &nbsp;
                </p>
              </Marquee>
              <Marquee pauseOnHover={true} className="">
                <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
                  SUNLIGHT &nbsp; NEWTON & DAVID &nbsp; CHIVAS &nbsp; WAKA NOW
                  &nbsp; PENNY&nbsp; CIROC &nbsp; PIGGYVEST &nbsp; WAKA NOW
                  &nbsp; GOLDEN PENNY
                </p>
              </Marquee>
            </div>
          </section>
          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                AWARDS{" "}
              </h2>
            </Magnetic>
            <div className="hidden md:block">
              <Marquee pauseOnHover={true} className="mb-5">
                <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
                  DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM
                  UAE .
                </p>
              </Marquee>
              <Marquee pauseOnHover={true} direction="right">
                <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
                  GLOBAL YOUTH FORUM UAE . ALJAZEERA . YNAIJA! . DRAGONS DEN .{" "}
                </p>
              </Marquee>
            </div>
            <div>
              <ul className="text-[#fff] text-[18px] leading-[-0.216px] flex flex-col gap-[8px] font-light md:hidden">
                <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                  <li>DRAGONS DEN </li>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                  <li>YNAIJA</li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                  <li>UNI OF SALFORD </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                  <li>GLOBAL YOUTH FORUM UAE</li>
                </ScrollAnimation>
              </ul>
            </div>
          </section>
          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                WORK WITH ME{" "}
              </h2>
            </Magnetic>
            {/* <div className="overflow-x-scroll flex md:hidden gap-[16px]  scrollbar-thumb-[#39ff14]  scrollbar-thin  scrollbar-track-white pb-[32px] ">
              <div className="flex-shrink-0">
                <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
                  01
                </h2>
                <h2 className="text-[32px] font-medium text-white">
                  Brand Strategy
                </h2>
              </div>
              <div className="flex-shrink-0">
                <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
                  02
                </h2>
                <h2 className="text-[32px] font-medium text-white">
                  {" "}
                  PRODUCT DESIGN
                </h2>
              </div>
              <div className="flex-shrink-0">
                <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
                  03
                </h2>
                <h2 className="text-[32px] font-medium text-white">
                  NETWORKING
                </h2>
              </div>
              <div className="flex-shrink-0">
                <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
                  04
                </h2>
                <h2 className="text-[32px] font-medium text-white">
                  DIGITAL MARKETING
                </h2>
              </div>
              <div className="flex-shrink-0">
                <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
                  05
                </h2>
                <h2 className="text-[32px] font-medium text-white">
                  BUSINESS CONSULTING
                </h2>
              </div>
              <div className="flex-shrink-0">
                <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
                  06
                </h2>
                <h2 className="text-[32px] font-medium text-white">
                  BRAND COLLABORATIONS & ENDORSEMENT
                </h2>
              </div>
            </div> */}

            <div className="grid-cols-2 grid md:grid-cols-3 gap-[20px] ">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                duration={1}
                offset={200}
              >
                <div className="  text-white max-w-[170px] sm:max-w-[200px]  md:max-w-[435px] rounded-[16px]">
                  <img
                    src="/branding.jpg"
                    alt="icon"
                    className="mb-[24px] w-full rounded-xl"
                  />
                  <h3 className="text-[19px] md:text-[22px] lg:text-[26px]  font-medium">
                    BRANDING STRATEGY DEVELOPMENT
                  </h3>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                duration={1}
                offset={200}
              >
                <div className="  text-white max-w-[170px] sm:max-w-[200px]  md:max-w-[435px] rounded-[16px]">
                  <img src="/design.jpg" alt="icon"                     className="mb-[24px] w-full rounded-xl"
 />
                  <h3 className="text-[19px] md:text-[22px] lg:text-[26px]  font-medium">
                    PRODUCT DESIGN
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="animate__fadeInRight"
                duration={1}
                offset={200}
              >
                <div className="  text-white max-w-[170px] sm:max-w-[200px]  md:max-w-[435px] rounded-[16px]">
                  <img src="/networking.jpg" alt="icon"                     className="mb-[24px] w-full rounded-xl"
/>
                  <h3 className="text-[19px] md:text-[22px] lg:text-[26px]  font-medium">
                    NETWORK FACILITATION &  CONNECTIVITY
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="animate__fadeInRight"
                duration={1}
                offset={200}
              >
                <div className="  text-white max-w-[170px] sm:max-w-[200px]  md:max-w-[435px] rounded-[16px]">
                  <img src="/digital.jpg" alt="icon"                     className="mb-[24px] w-full rounded-xl"
 />
                  <h3 className="text-[19px] md:text-[22px] lg:text-[26px]  font-medium">
                    DIGITAL MARKETING
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__fadeInDown" duration={1}>
                <div className="  text-white max-w-[170px] sm:max-w-[200px]  md:max-w-[435px] rounded-[16px]">
                  <img src="/consult.jpg" alt="icon"                     className="mb-[24px] w-full rounded-xl"
 />
                  <h3 className="text-[19px] md:text-[22px] lg:text-[26px]  font-medium">
                   PRODUCT INNOVATION CONSULTANCY SERVICE
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
                <div className="  text-white max-w-[170px] sm:max-w-[200px]  md:max-w-[435px] rounded-[16px]">
                  <img src="/collabo.jpg" alt="icon"                     className="mb-[24px] w-full rounded-xl"
/>
                  <h3 className="text-[19px] md:text-[22px] lg:text-[26px]  font-medium">
                    BRAND COLLABORATIONS & ENDORSEMENT
                  </h3>
                </div>
              </ScrollAnimation>
            </div>
            
          </section>
        </div>
      ) : (
        ""
      )}

      {menu === "about" ? (
        <div>
          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                ABOUT
              </h2>
            </Magnetic>

            <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
              <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
                Deliverables from some Marketing & growth initiatives, product
                designs and branding development projects that I’ve led.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
              <h3 className="text-[14px] md:text-[24px] lg:text-[28px] text-white w-full mb-[24px] md:mb-[60px] lg:mb-[90px] ">
              <WindupChildren>{"By night, I channel my creativity as a Product/Industrial Designer. I excel in connecting people over good food and whisky, earning me the title of Super connector. I'm known as a visionary, a nickname given by my good friend Sam. Originally from Manchester, UK, I now reside in Lagos, Nigeria. I have an appreciation for all things beautiful and possess a sophisticated taste."}</WindupChildren> 
              </h3>
            </ScrollAnimation>

            <div className="flex flex-col-reverse md:flex-row gap-[40px] mb-[24px] md:mb-[60px] lg:mb-[90px] ">
              <div className="w-full md:w-[40%] ">
                <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                  <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
                    “When I'm not out and about, I enjoy being a homebody and
                    curating amazing home pieces for the soulful minimalist,
                    Check out Blvck Apron. I'm constantly pushing my boundaries
                    to create unique and engaging content. My heart belongs to
                    Dr. Bisola, my energetic and gorgeous yin.”{" "}
                  </p>
                </ScrollAnimation>
              </div>
              <div className="w-full md:w-[60%]">
                <img
                  src="/pics.png"
                  alt="Samuel otigba at the beach"
                  className="md:h-[500px] lg:h-[603px] object-contain"
                />
              </div>
            </div>

            <div>
              <p className="text-white text-[14px] font-light md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
                LIFE OUTSIDE THE PRODUCT & GROWTH HACK
              </p>
              <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                <p className="text-[14px] md:text-[24px] lg:text-[28px] text-white w-full ">
                  Although I'm now in my 30s, I used to be a lot more fun!
                  Marvel comics and movies are my obsessions. Sharing my
                  knowledge and teaching digital designs brings me joy. If
                  you're interested, I have a more detailed résumé showcasing my
                  professional journey. As a digital philanthropist, I enjoy
                  giving back through job opportunities and helping others.
                  Mango Lassi is my ultimate addiction. With years of
                  experience, I bring a wealth of knowledge and expertise to
                  everything I do. Every encounter I have is an opportunity to
                  tell a story., and you can find most of it on @samuelotigba.
                  Stay tuned because there are many more exciting things to come
                  from me.
                </p>
              </ScrollAnimation>

              <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
                Oh, and I take beautiful pictures too.{" "}
                <span className="underline">Check here!</span> 😎 📸
              </p>
            </div>

            <div className="mb-[24px]">
              <Magnetic>
                <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                  JOURNEY
                </h2>
              </Magnetic>
              <div>
                <p className="text-[14px] md:text-[24px] lg:text-[28px] text-white w-full ">
                  Here is where I get to be quite serious.
                  <br />
                  I’ve gone through quite a number of phases in my career life,
                  and each of them has shaped my current work ethos and
                  philosophy.
                  <br />
                  <br />I have excelled in a number of project management roles
                  in diverse industries, and believe that my number one asset is
                  my ability to adapt to any challenge that is thrown my way.
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
            <div>
                <div className="flex flex-row justify-between">
                  {" "}
                  <div className="flex flex-col text-[#ffffff] ">
                    <p className="text-[18px] md:text-[24px]">Vendy</p>{" "}
                    <p className=" italic text-[18px] md:text-[24px] max-w-[70%]">
                      Head of Brands and Communication 
                    </p>{" "}
                    <p className="md:text-[20px] text-[14px]">
                      Aug ‘23 - Present
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between mt-[32px]">
                  {" "}
                  <div className="flex flex-col text-[#ffffff] ">
                    <p className="text-[18px] md:text-[24px]">BEZI</p>{" "}
                    <p className=" italic text-[18px] md:text-[24px] max-w-[70%]">
                      Growth Strategy Consultant
                    </p>{" "}
                    <p className="md:text-[20px] text-[14px]">
                      Jan ‘23 - Present
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex flex-row justify-between mt-[32px]">
                  {" "}
                  <div className="flex flex-col max-w-[65%] text-[#ffffff]">
                  <p className="text-[18px] md:text-[24px]">META</p>
                  <p className="text-[18px] md:text-[24px]">Sabee, NPE</p>{" "}
                  <p className=" italic text-[18px] md:text-[24px] ">Product Marketing Manager (Contractual)</p>{" "}
                  <p className="text-[20px]">May ‘22 - Nov '22</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between mt-[32px]">
                  {" "}
                  <div className="flex flex-col max-w-[70%] text-[#ffffff]">
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
                      className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full whitespace-nowrap text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                        {more3 === true ? "VIEW LESS" : "MORE INFO"}
                      </span>
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
                  <div className="flex flex-col max-w-[65%] text-[#ffffff]">
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
                      className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                        {more4 === true ? "VIEW LESS" : "MORE INFO"}
                      </span>
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
                        Client initiative strategies easier. I was able to
                        exceed 150% of the planned revenue quota of the company
                        portfolio.
                        <br />
                        <br />I still have a soft spot for SmartEdge and I
                        remain a Consultant for them on a request basis.
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
                  <div className="flex flex-col max-w-[65%] text-[#ffffff]">
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
                      className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                        {more5 === true ? "VIEW LESS" : "MORE INFO"}
                      </span>
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
                        I worked as a consultant on the Creative African
                        Exchange Programme for 3 months. The buildup to the main
                        event that happened in Kigali Rwanda was an interesting
                        one. Oh and Rwanda is extremely beautiful!
                        <br />I worked closely with the in house marketing team
                        to develop the branding strategy, Led a 15-person team
                        to deliver digital marketing services and the delivery
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
                  <div className="flex flex-col max-w-[65%] text-[#ffffff]">
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
                      className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                        {more6 === true ? "VIEW LESS" : "MORE INFO"}
                      </span>
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
                        people interact with content. Coordinated the
                        development and execution of communication materials
                        such as blog, websites and social media marketing.{" "}
                        <br />
                        Also tapped into my business side and got involved in
                        the development, deployment of the company’s long and
                        short term business model that identifies new business
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
                <button className="btn  mt-9 relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group">
                  <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                    My resume has got more..
                  </span>
                </button>
              </a>
            </div>

            {/* <JourneyAccordion
              company={"Bezi"}
              position={"Chief Growth Officer"}
              date={""}
              more={"false"}
            />
            <JourneyAccordion
              company={"Meta"}
              position={"Product Marketing Manager (NPE)"}
              date={"June ‘22 - Sept '22"}
              more={"false"}
            />
            <JourneyAccordion
              company={"AVANTEFLY"}
              position={"Chief Operating Officer"}
              date={"Since March 2021"}
              more={"true"}
            />
            <JourneyAccordion
              company={"Smart Edge"}
              position={
                "Senior Partner (Client Development)/Business Consultant)"
              }
              date={"Oct '19 - Jan '21"}
              more={"true"}
            />
            <JourneyAccordion
              company={"CAX Africa"}
              position={
                "Head Digital Communications/Digital Marketing Consultant"
              }
              date={"Nov '19 - Jan '20"}
              more={"true"}
            />
            <JourneyAccordion
              company={"Nemakeathon"}
              position={"Panelist/Facilitator/Mentor"}
              extra={"Under The Office Of The Vice President Of Nigeria"}
              date={"Feb '18 - Jun '18"}
              more={"true"}
            />
            <JourneyAccordion
              company={"United Nations NGO: Youth Charter"}
              position={"Digital Advisory Board Member"}
              date={"'17"}
              more={"true"}
            />
            <JourneyAccordion
              company={"MP Andy Burnham Campaign"}
              position={"Campaign and Reputation Brand Strategist"}
              date={"Jan '17 - May '17"}
              more={"true"}
            />
            <JourneyAccordion
              company={"Wildings Solicitor/Incubox"}
              position={"Digital MArketing Exec. Design Lead"}
              date={"'15 - '16"}
              more={"true"}
            />
            <JourneyAccordion
              company={"University of Salford"}
              position={"Lead Designer for the Mooc Animation & Book"}
              date={"'15 - '16"}
              more={"true"}
            />
            <JourneyAccordion
              company={"Al Alhi Csr Group, UAE"}
              position={"Digital Innovation Lead - Hemitna Project"}
              date={"2015"}
              more={"true"}
            /> */}

            {/* <button className="underline text-white">
              My resume has got more..
            </button> */}
          </section>
          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[28px] md:text-[32px] lg:text-[50px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
                AWARDS{" "}
              </h2>
            </Magnetic>
            <div className="hidden md:block">
              <Marquee pauseOnHover={true} className="mb-5">
                <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
                  DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM
                  UAE .
                </p>
              </Marquee>
              <Marquee pauseOnHover={true} direction="right">
                <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
                  GLOBAL YOUTH FORUM UAE . ALJAZEERA . YNAIJA! . DRAGONS DEN .{" "}
                </p>
              </Marquee>
            </div>
            <div>
              <ul className="text-[#fff] text-[18px] leading-[-0.216px] flex flex-col gap-[8px] font-light md:hidden">
                <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                  <li>DRAGONS DEN </li>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  duration={1}
                  offset={100}
                >
                  <li>YNAIJA</li>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  duration={1}
                  offset={100}
                >
                  <li>UNI OF SALFORD </li>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  duration={1}
                  offset={70}
                >
                  <li>GLOBAL YOUTH FORUM UAE</li>
                </ScrollAnimation>
              </ul>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
      <section
        ref={bottomEl}
        className="py-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]"
      >

      <button
              onClick={() => {
                setContactBox(!contactbox);
              }}
              className="btn mb-10 relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group"
            >
              <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full flex items-center text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
                Ready to get in touch? <BsArrowRight />
              </span>
            </button>
        <div className="flex justify-between text-center">
          <div className="text-white text-[12px]">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
          <div className="hidden lg:block">
            <ul className="text-white flex gap-[20px] xl[40px]">
              <li>PRIVACY</li>
              <li>POLICY</li>
              <li>PRESS</li>
            </ul>
          </div>
          <div className="flex items-center gap-2 md:gap-4 ">
            <img src="/twitter.png" alt="twitter" className="h-[18px] md:h-6" />
            <img
              src="/instagram.png"
              alt="instagram"
              className="h-[18px] md:h-6"
            />
            <img
              src="/linkedin.png"
              alt="linkedin"
              className="h-[18px] md:h-6"
            />
          </div>
        </div>
      </section>

      {contactbox ? (
        <m.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{
            type: "ease",

            delay: 1.5,
            duration: 1.5,
          }}
          className="absolute  bottom-0 w-full z-40 animate__fadeInUp  animate__animated"
        >
          <div className="pt-[40px] rounded-tl-[40px] rounded-tr-[40px] relative md:pt-[104px] px-[16px] md:px-[48px] text-[#000] bg-[#FFF] pb-[32px] ">
            <button
              onClick={() => {
                setContactBox(!contactbox);
              }}
              className="absolute right-5 top-7 px-2 py-1 hover:bg-black hover:text-white rounded-2xl"
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
                  className="text-black px-3 py-2 border border-[#000] rounded-[24px] mt-[28px] hover:text-white hover:bg-black"
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

export default Layout;
