import React, { useState } from "react";
import TableRoles, { roles } from "../../components/Dashboard/TableRoles";
import MessageError from "../../components/Dashboard/MessageError";
import FormAddRole from "../../components/Dashboard/FormAddRole";
import { Link } from "react-router-dom";
import { ROUTES_PATHS } from "../../../constants";

const AdminRole = () => {
  const [newRole, setNewRole] = useState(" ");
  const [desc, setDesc] = useState(" ");
  const [currentRoles, setCurrentRoles] = useState(roles);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F7F7F7] text-[#727272]">
      <div className="mx-auto max-w-7xl px-5 py-[60px]">
        <h6 className="font-semibold text-2xl xl:text-4xl">
          System Role Management
        </h6>
        <p className="mt-4 text-lg xl:text-2xl">
          The system allows you to manage the roles available in your
          organization, you can also view the permissions of those roles
        </p>
        <TableRoles data={currentRoles} setCurrentRoles={setCurrentRoles} />

        <div className="flex justify-end space-x-4 mt-8 xl:mt-[54px]">
          <Link to={ROUTES_PATHS.ADMIN_ROLE_PERMISSION_ADD}>
            <button className="flex items-center text-white gap-4 px-4 py-4 bg-[#568CF4] rounded-lg">
              <span>Create new permission</span>
            </button>
          </Link>
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
            <span>Create new role</span>
          </button>
        </div>

        <FormAddRole open={open} setOpen={setOpen} />

        {/* <h6 className="text-xl xl:text-3xl font-semibold mt-8 xl:mt-14">
          New system role
        </h6>
        <div className="mt-5 xl:mt-10 xl:w-1/2">
          <div className="flex items-start">
            <label className="w-[180px] font-semibold text-lg xl:text-2xl">
              Role Name
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={newRole}
                onChange={(e) => {
                  setNewRole(e.target.value);
                }}
                className="w-full px-3 py-1.5 rounded-lg border-[#CCC9C9] border-2"
                style={{ boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              />
              {!newRole && <MessageError error={"Role name is required"} />}
            </div>
          </div>
          <div className="flex items-start mt-5 xl:mt-10">
            <label className="w-[180px] font-semibold text-lg xl:text-2xl">
              Description
            </label>
            <div className="flex-1">
              <textarea
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className="w-full min-h-[110px] px-3 py-1.5 flex-1 rounded-lg border-[#CCC9C9] border-2"
                style={{ boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              />
              {!desc && <MessageError error={"Description is required"} />}
            </div>
          </div>
          <div className="flex justify-center mt-8 xl:mt-16">
            <button className="text-white bg-[#043AC5] py-2 font-semibold w-[200px] text-center text-xl xl:text-3xl">
              Add role
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminRole;
