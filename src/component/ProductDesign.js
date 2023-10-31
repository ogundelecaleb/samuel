import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";
import ScrollAnimation from "react-animate-on-scroll";

const ProductDesign = () => {
  return (
    <div>
      <div className="pb-[24px] md:pb-[48px] lg:pb-[64px]  lg:pt-[24px] border-b-white">
        {/* <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}> */}
          <h3 className="text-[14px] md:text-[24px] animate__fadeInLeft  animate__animated lg:text-[28px] text-white w-full ">
            I strive for the perfect balance between form and function in my
            work. Simplicity is at the core of my design ideology, where every
            element has a purpose. My style is uniquely defined by uncluttered
            aesthetics, characterized by clean lines, shapes, and fonts.
          </h3>
        {/* </ScrollAnimation> */}
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default ProductDesign;
