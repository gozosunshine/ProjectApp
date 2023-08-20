import React, { useState } from "react";
import BtnGenerateReport from "../../components/Dashboard/BtnGenerateReport";
import FilterDateRange from "../../components/Filter/DateRange";
import {
  RANGE_VALUES,
  dateRangesOptions,
} from "../../components/Filter/InitState";
import LineChartCreatedAndResolved from "../../components/Overview/LineChartCreatedAndResolved";
import CardStatistic from "../../components/Overview/CardStatistic";
import clsx from "clsx";
import styles from "./styles.module.scss";

const temp = () => ({
  created: Array(30)
    .fill(1)
    .map((_, index) => ({
      x: `Aug ${index + 1}`,
      y: Math.random() * 400 + 50,
    })),
  resolved: Array(30)
    .fill(1)
    .map((_, index) => ({
      x: `Aug ${index + 1}`,
      y: Math.random() * 300 + 20,
    })),
});

const AdminStatistics = () => {
  const [dateRanges, setDateRanges] = useState(dateRangesOptions?.[2]);
  const [openDialog, setOpenDialog] = useState(false);
  const data = {
    [RANGE_VALUES.YESTERDAY]: temp(),
    [RANGE_VALUES.LAST_WEEK]: temp(),
    [RANGE_VALUES.LAST_MONTH]: temp(),
    [RANGE_VALUES.CURRENT_MONTH]: temp(),
    [RANGE_VALUES.CUSTOM]: temp(),
  };

  return (
    <>
      <div className="bg-[#42526E] py-4 px-8 xl:pl-[58px] xl:pr-[70px] xl:py-9 flex flex-col md:flex-row items-start gap-4 md:items-center justify-between">
        <FilterDateRange
          selected={dateRanges}
          setSelected={setDateRanges}
          options={dateRangesOptions}
          placeholder="Select range"
          title="Date range"
          className="w-full md:w-[280px]"
        />
        <BtnGenerateReport open={openDialog} setOpen={setOpenDialog} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="py-[45px] px-10 space-y-8 xl:space-y-[75px]">
          <div className="flex gap-4 xl:gap-9 flex-wrap">
            <CardStatistic
              title="Created"
              value={data?.[dateRanges?.value]?.created
                ?.reduce((prev, current) => +(prev + current?.y), 0)
                .toFixed(3)}
              className="xl:!h-auto"
            />
            <CardStatistic
              title="Resolved"
              value={data?.[dateRanges?.value]?.resolved
                ?.reduce((prev, current) => +(prev + current?.y), 0)
                .toFixed(3)}
              className="xl:!h-auto"
            />
          </div>
          <LineChartCreatedAndResolved data={data?.[dateRanges?.value]} />

          <table className={clsx(styles.table, "w-full text-left")}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Created</th>
                <th>Resolved</th>
              </tr>
            </thead>
            <tbody>
              {data?.[dateRanges?.value]?.created?.map((item, index) => (
                <tr key={index}>
                  <td>{item?.x}</td>
                  <td>{item?.y.toFixed(2)}</td>
                  <td>
                    {data?.[dateRanges?.value]?.resolved
                      ?.find((i) => i?.x === item?.x)
                      ?.y.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminStatistics;
