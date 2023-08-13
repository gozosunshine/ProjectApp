import React, { useState } from "react";
import TableUsers from "../../components/Dashboard/TableUsers";
import { roles } from "../../components/Dashboard/TableRoles";
import FormAddUser from "../../components/Dashboard/FormAddUser";

const AdminUserManage = () => {
  const [currentRoles, setCurrentRoles] = useState(
    Array(3).fill({
      name: "Tu Doan",
      email: "tuda@company.com.vn",
      role: roles[0],
    })
  );

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F7F7F7] text-[#727272]">
      <div className="mx-auto max-w-7xl px-5 py-[60px]">
        <h6 className="font-semibold text-2xl xl:text-4xl">
          System User Management
        </h6>
        <p className="mt-4 text-lg xl:text-2xl">
          The system allows you to manage the roles available in your
          organization, you can also view the permissions of those roles
        </p>

        <TableUsers data={currentRoles} setCurrentRoles={setCurrentRoles} />
        <div className="flex justify-end space-x-4 mt-8 xl:mt-[54px]">
          <button
            className="flex items-center text-white gap-4 px-4 py-2 bg-[#4AA976] rounded-lg"
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M16.042 18.9587H7.29199V16.042H16.042V7.29199H18.9587V16.042H27.7087V18.9587H18.9587V27.7087H16.042V18.9587Z"
                fill="white"
              />
            </svg>
            <span>Create new user</span>
          </button>
        </div>

        <FormAddUser open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default AdminUserManage;
