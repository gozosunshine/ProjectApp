import clsx from "clsx";
import React from "react";

const sidebarMenus = {
  main: [
    { icon: "./images/icon-dashboard.svg", label: "Dashboard", href: "" },
    { icon: "./images/icon-ticket.svg", label: "Ticket" },
    { icon: "./images/icon-user.svg", label: "User" },
    { icon: "./images/icon-report.svg", label: "Report" },
  ],
  sub: [
    { icon: "./images/icon-setting.svg", label: "Setting" },
    { icon: "./images/icon-contact.svg", label: "Contact us" },
  ],
};

const MenuList = ({ menus }) => {
  return (
    <ul className="space-y-[35px]">
      {menus.map((item) => {
        const isActive = item.label === "Dashboard";
        return (
          <li
            key={item.label}
            className={clsx(
              "flex space-x-4 items-center pr-5 rounded-l-[20px] py-4 text-2xl cursor-pointer transition-all",
              isActive
                ? "bg-[#B9D9EB] font-bold pl-2.5"
                : "pl-5 hover:bg-[#B9D9EB] hover:font-bold hover:pl-2.5"
            )}
          >
            <img src={item.icon} alt="" />
            <div className="flex items-center flex-1 justify-between">
              <span>{item.label}</span>
              {isActive && <img src="./images/arrow.svg" alt="" />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-[#E0ECF2] pl-2 flex space-y-[70px] flex-col w-[300px] h-screen absolute top-0 left-0 shadow-xl">
      <div className="flex w-[200px] mx-auto">
        <img src="./images/logo.png" alt="" />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto justify-between space-y-4 pb-10 pl-5 font-poppins">
        <MenuList menus={sidebarMenus.main} />
        <MenuList menus={sidebarMenus.sub} />
      </div>
    </aside>
  );
};

export default Sidebar;
