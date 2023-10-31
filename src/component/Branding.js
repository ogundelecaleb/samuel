import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";

const Branding = () => {
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
        <PortfolioAccordion
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
        />
      </div>
    </div>
  );
};

export default Branding;
