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

const Layout = () => {
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
                Hi! 👋 <br />I am Samuel Otigba, a daily Product Growth and
                Marketing Specialist and also a Product/ Industrial designer
                every other night. I am a visionary(Sam calls me that LOL) who
                currently lives in Lagos, Nigeria.
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
            <ul className="flex items-center overflow-x-auto pb-4 mb-3 gap-[32px]">
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
                    Brand Collections
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
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Armani
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Wakanow
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Maggi
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  NdaniTV
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  UBA
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
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Mavins Records
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Ninie Lagos
                </div>

                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Essenza
                </div>

                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Piggyvest
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Infinix
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] text-center rounded-full flex justify-center items-center border border-white text-white">
                  FreshPrep by Eros
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Sunlight
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Newton & David
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Ciroc
                </div>
                <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
                  Golden Penny
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
            <div className="overflow-x-scroll flex md:hidden gap-[16px]  scrollbar-thumb-[#39ff14]  scrollbar-thin  scrollbar-track-white pb-[32px] ">
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
            </div>

            <div className="md:grid grid-cols-3 gap-[20px] hidden ">
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                duration={1}
                offset={200}
              >
                <div className="  text-white  max-w-[435px] rounded-[16px]">
                  <img src="/brand.png" alt="icon" className="mb-[24px]" />
                  <h3 className="text-[22px] lg:text-[26px]  font-medium">
                    BRANDING STRATEGY
                  </h3>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                duration={1}
                offset={200}
              >
                <div className="  text-white  max-w-[435px] rounded-[16px]">
                  <img src="/design.png" alt="icon" className="mb-[24px]" />
                  <h3 className="text-[22px] lg:text-[26px]  font-medium">
                    PRODUCT DESIGN
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="animate__fadeInRight"
                duration={1}
                offset={200}
              >
                <div className="  text-white  max-w-[435px] rounded-[16px]">
                  <img src="/networking.png" alt="icon" className="mb-[24px]" />
                  <h3 className="text-[22px] lg:text-[26px]  font-medium">
                    NETWORKING
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="animate__fadeInRight"
                duration={1}
                offset={200}
              >
                <div className="  text-white  max-w-[435px] rounded-[16px]">
                  <img src="/digital.png" alt="icon" className="mb-[24px]" />
                  <h3 className="text-[22px] lg:text-[26px]  font-medium">
                    DIGITAL MARKETING
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__fadeInDown" duration={1}>
                <div className="  text-white  max-w-[435px] rounded-[16px]">
                  <img src="/consult.png" alt="icon" className="mb-[24px]" />
                  <h3 className="text-[22px] lg:text-[26px]  font-medium">
                    BUSINESS CONSULTING
                  </h3>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}>
                <div className="  text-white  max-w-[435px] rounded-[16px]">
                  <img src="/consult.png" alt="icon" className="mb-[24px]" />
                  <h3 className="text-[22px] lg:text-[26px]  font-medium">
                    BRAND COLLABORATIONS & ENDORSEMENT
                  </h3>
                </div>
              </ScrollAnimation>
            </div>
            <button
               onClick={() => {
                setContactBox(!contactbox);
              }}
              className="btn relative inline-flex items-center justify-start overflow-hidden transition-all px-3 py-2 z-20 rounded-[24px] border border-white bg-black text-white to-white via-black from-[#111111] hover:bg-white group"
            >
              <span className="w-0 h-0 rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full flex items-center text-white transition-colors duration-600 ease-in-out group-hover:text-black z-10">
              Ready to get in touch?{" "}
              <BsArrowRight/>
              </span>
            </button>
           
          </section>
        </div>
      ) : (
        ""
      )}

      {menu === "about" ? (
        <div>
          <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
            <Magnetic>
              <h2 className="text-[34px] md:text-[52px] lg:text-[72px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
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
              <h3 className="text-[14px] md:text-[24px] lg:text-[28px] text-white w-full ">
                By night, I channel my creativity as a Product/Industrial
                Designer. I excel in connecting people over good food and
                whisky, earning me the title of Super connector. I'm known as a
                visionary, a nickname given by my good friend Sam. Originally
                from Manchester, UK, I now reside in Lagos, Nigeria. I have an
                appreciation for all things beautiful and possess a
                sophisticated taste.
              </h3>
            </ScrollAnimation>

            <div>
              <div>
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
              <div>
                <img src="" alt="" />
              </div>
            </div>

            <div>
              <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
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

              <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
                <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
                  Oh, and I take beautiful pictures too. Check here! 😎 📸
                </p>
              </ScrollAnimation>
            </div>

            <div className="mb-[24px]">
              <Magnetic>
                <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[34px] py-[10px] lg:py-[16px] mb-[16px] text-[12px] md:text-base lg:text-[18px] ">
                  JOURNEY
                </button>
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
            <JourneyAccordion
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
            />

            <button className="underline text-white">
              My resume has got more..
            </button>
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
        </div>
      ) : (
        ""
      )}
      <section
        ref={bottomEl}
        className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]"
      >
        <div className="flex justify-between text-center">
          <div className="text-white">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
          <div className="hidden lg:block">
            <ul className="text-white flex gap-[20px] xl[40px]">
              <li>PRIVACY</li>
              <li>POLICY</li>
              <li>PRESS</li>
            </ul>
          </div>
          <div className="flex items-center ">
            <img src="/twitter.png" alt="twitter" />
            <img src="/instagram.png" alt="instagram" />
            <img src="/linkedin.png" alt="linkedin" />
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
          className="absolute bottom-0 w-full z-40 animate__fadeInUp  animate__animated"
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

export default Layout;
