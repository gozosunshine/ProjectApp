import React from "react";

const Header = () => {
  return (
    <div className="bg-[#7F91B0] py-7 pl-[70px] pr-12 flex justify-between">
      <h6 className="text-white text-2xl lg:text-3xl font-bold">Dashboard</h6>
      <div className="flex space-x-10">
        <img
          src="/images/icon-notify.svg"
          alt=""
          className="p-2 rounded-full hover:bg-slate-400 cursor-pointer"
        />
        <div className="flex space-x-3 items-center cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-[#D9D9D9] flex items-center justify-center">
            <img src="/images/avatar.svg" alt="" />
          </div>
          <div className="text-sm flex flex-col text-white">
            <span className="font-bold">Doan Tu</span>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
