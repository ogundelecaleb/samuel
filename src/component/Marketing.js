import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";

const Marketing = () => {
  return (
    <div>
      <div className="pb-[24px] md:pb-[48px] lg:pb-[64px]  lg:pt-[24px] border-b-white">
      <h3 className="text-[14px] md:text-[24px] animate__fadeInLeft  animate__animated lg:text-[28px] text-white w-full ">
          In the realm of marketing and growth, I harness the power of
          data-driven strategies and innovative thinking to propel businesses
          forward.<br/>
           My approach revolves around finding the perfect balance
          between creativity and analytics, delivering campaigns that captivate
          audiences and drive tangible results. With a keen eye for market
          trends and a deep understanding of consumer behavior, I create
          impactful marketing initiatives that fuel business growth and
          cultivate meaningful connections with customers.
        </h3>
      </div>
      <div>
        <PortfolioAccordion
          company={"Folio Media"}
          client={"Folio Media"}
        />
        <PortfolioAccordion
          company={"CAX"}
          client={"CAX"}
        />
        <PortfolioAccordion
          company={"AfriNolly"}
          client={"Afrinolly"}
        />
          <PortfolioAccordion
          company={"Life Centre"}
          client={"Life Centre"}
        />
      </div>
    </div>
  );
};

export default Marketing;
