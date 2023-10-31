import React from "react";

const PortfolioAccordion = ({ company, client }) => {
  return (
    <div><div className="py-[24px] md:py-[64px] lg:py-[92px] gap-[10%] border-t border-t-white w-full">
      <div className="pt-[24px] md:pt-[64px] flex justify-between gap-[10%] w-full">
      
        <div className="flex flex-col justify-center w-full">
          <div className="w-full">
            <h2 className="text-[#BABABA] text-[22px] font-medium md:text-[36px] lg:text-[56px] tracking-tighter">
              {company}
            </h2>{" "}
          </div>
        </div>

        <div>
          <div className="text-[#BABABA] text-[24px] hidden lg:block ">
            <p className="text-right">Client:</p>
            <p className="whitespace-nowrap">{client}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[16px] py-[10px] lg:py-[12px] text-[12px] md:text-base lg:text-[18px]">
          EXPAND
        </button>{" "}
        <div className="text-[#BABABA] text-24px block lg:hidden ">
          <p className="text-right">Client:</p>
          <p className="whitespace-nowrap">{client}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PortfolioAccordion;
