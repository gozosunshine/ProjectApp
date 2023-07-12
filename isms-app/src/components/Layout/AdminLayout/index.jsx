import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex font-poppins">
      <Sidebar />
      <div className="pl-[300px] bg-[#E3E9E9] w-full h-screen flex flex-col">
        <Header />

        <div className="flex-1 flex flex-col overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
