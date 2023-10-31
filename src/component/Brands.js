import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";

const Brands = () => {
  return (
    <div>
      <div className="pb-[24px] md:pb-[48px] lg:pb-[64px]  lg:pt-[24px] border-b-white">
      <h3 className="text-[14px] md:text-[24px] animate__fadeInLeft  animate__animated lg:text-[28px] text-white w-full ">
          As a brand influencer, I have the privilege of partnering with diverse
          brands to create authentic and impactful collaborations. With a deep
          understanding of brand values and audience engagement, I bring a
          unique perspective to each collaboration. Through genuine storytelling
          and strategic content creation, I aim to inspire and connect with
          audiences on a profound level.
        </h3>
      </div>
      <div>
        <PortfolioAccordion company={"Armani"} client={"ARMANI"} />
        <PortfolioAccordion company={"Martell"} client={"Martell"} />
        <PortfolioAccordion company={"UBA"} client={"UBA"} />
        <PortfolioAccordion company={"infinix"} client={"infinix"} />
        <PortfolioAccordion company={"showmax"} client={"Showmax"} />
        <PortfolioAccordion company={"payday"} client={"payday"} />
        <PortfolioAccordion company={"OCTAFX"} client={"OCTAFX"} />
        <PortfolioAccordion company={"moniepoint"} client={"moniepoint"} />
        <PortfolioAccordion company={"CIROC"} client={"CIROC"} />
        <PortfolioAccordion company={"SPOTIFY"} client={"SPOTIFY"} />
        <PortfolioAccordion company={"PRIME VIDEO"} client={"PRIME VIDEO"} />
        <PortfolioAccordion company={"HOUSE OF LUNETTES"} client={"HOUSE OF LUNETTES"} />

      </div>
    </div>
  );
};

export default Brands;
