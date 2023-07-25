import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const TableRoles = () => {
  return (
    <table className={clsx(styles.table, "w-full text-left mt-8 xl:mt-16")}>
      <tr>
        <th>Role Name</th>
        <th>Description</th>
        <th>&nbsp;</th>
      </tr>
      {Array(3)
        .fill(1)
        .map((_, index) => (
          <tr key={index}>
            <td>Administrator</td>
            <td>Description for IT Service Administrator</td>
            <td className="space-x-10 flex">
              <div className="space-x-5">
                <button className="text-[#3A7DFF] focus:outline-none border-0">
                  Edit
                </button>
                <button className="text-[#3A7DFF] focus:outline-none border-0">
                  Delete
                </button>
              </div>
              <button className="text-[#3A7DFF] focus:outline-none border-0">
                View Permission
              </button>
            </td>
          </tr>
        ))}
    </table>
  );
};

export default TableRoles;
