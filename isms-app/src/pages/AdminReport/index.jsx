import React, { useState } from "react";
import FilterDateRange from "../../components/Filter/DateRange";
import { dateRangesOptions } from "../../components/Filter/InitState";
import ColumnChart from "../../components/Overview/ColumnChart";
import ChartLayout from "../../components/Overview/ChartLayout";
import LineChartNewTicket from "../../components/Overview/LineChartNewTicket";
import LineChartSatisfaction from "../../components/Overview/LineChartSatisfaction";
import LineChartResponseTime from "../../components/Overview/LineChartResponseTime";
import LineChartSolvedAndClose from "../../components/Overview/LineChartSolvedAndClose";

const AdminReport = () => {
  const [dateRanges, setDateRanges] = useState(dateRangesOptions?.[2]);

  return (
    <>
      <div className="bg-[#42526E] pl-[58px] pr-[70px] py-9 flex items-center justify-between">
        <FilterDateRange
          selected={dateRanges}
          setSelected={setDateRanges}
          options={dateRangesOptions}
          placeholder="Select range"
          title="Date range"
          className="w-[280px]"
        />
        <button className="bg-[#DCE4FF] px-[14px] py-3 space-x-1 flex items-center">
          <span className="text-base">Generate report</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M23.5483 21.0938L19.6665 24.9634L18.5679 23.8647L20.5576 21.875H13.0625V20.3125H20.5576L18.5679 18.3228L19.6665 17.2241L23.5483 21.0938ZM15.3818 23.4375L16.9443 25H0.5625V0H14.1733L20.875 6.70166V15.6616L19.3125 14.0991V7.8125H13.0625V1.5625H2.125V23.4375H15.3818ZM14.625 6.25H18.2017L14.625 2.67334V6.25Z"
              fill="#111111"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="py-[45px] px-10 space-y-[75px]">
          <ColumnChart />
          <LineChartNewTicket />
          <LineChartSatisfaction />
          <LineChartResponseTime />
          <LineChartSolvedAndClose />
        </div>
      </div>
    </>
  );
};

export default AdminReport;
