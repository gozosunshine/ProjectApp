import clsx from "clsx";
import React from "react";

const Label = ({ index, label }) => {
  let color = "bg-[#2C834E]";
  if (index === 1) color = "bg-[#FA8418]";
  if (index === 2) color = "bg-[#F61E1E]";
  if (index === 3) color = "bg-[#48B8F6]";
  return (
    <div className="flex space-x-4 items-center">
      <span className={clsx(color, "w-2.5 h-2.5 rounded-full")}></span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const PieChart = ({ data, title }) => {
  return (
    <div className="border border-black">
      <div className="flex justify-between border-b-2 shadow-xl border-black items-center px-4 py-2 bg-[#E7E7E7]">
        <div className="flex items-center space-x-2">
          <img src="/images/icon-drag.svg" alt="" />
          <span className="text-xs font-bold">{title}</span>
        </div>
        <img src="/images/icon-menu.svg" alt="" />
      </div>
      <div className="p-5 space-y-5 bg-white">
        <div className="flex space-x-3 flex-wrap justify-center">
          <Label index={0} label={"Request"} />
          <Label index={1} label={"Incident"} />
        </div>
        <div className="flex justify-center">
          <img src="/images/type-circle.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
