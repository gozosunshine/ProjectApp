import React from "react";
import clsx from "clsx";

const CardStatistic = ({ title, value, className }) => {
  return (
    <div
      style={{ boxShadow: "6px 6px 10px 0px rgba(0,0,0,0.20)" }}
      className={clsx(
        "bg-white rounded-2xl px-10 py-4 text-black h-[205px]",
        className
      )}
    >
      <span className="text-xl uppercase h-14 line-clamp-2" title={title}>
        {title}
      </span>
      <span className="text-5xl font-bold">{value}</span>
    </div>
  );
};

export default CardStatistic;
