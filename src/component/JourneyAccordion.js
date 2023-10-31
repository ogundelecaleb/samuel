import React from "react";

const JourneyAccordion = ({ company, date, position, more }) => {
  return (
    <div className="flex justify-between items-center mb-[16px] md:mb-[24px] lg:mb-[32px] w-full">
      <div className="text-[#ffffff]">
        <h3 className="text-[18px] md:text-[24px] font-medium mb-[8px] ">
          {company}
        </h3>
        <p className="text-[17px] md:text-[24px] italic mb-[8px] ">
          {position}
        </p>
        <p className="text-[14px] md:text-[20px] ">{date}</p>
      </div>
      <div>
        {more === "true" ? (
          <>
            <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[16px] py-[10px] lg:py-[12px] text-[12px] md:text-base lg:text-[18px] hidden lg:block">
              MORE INFO
            </button>
            <button className="lg:hidden text-white border border-[#DBDBDB] rounded-[40px] px-[16px] py-[10px] lg:py-[12px] text-[12px] md:text-base lg:text-[18px]">
              MORE
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JourneyAccordion;
