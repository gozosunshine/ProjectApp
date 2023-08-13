import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES_PATHS } from "../../../constants";
import MessageError from "../../components/Dashboard/MessageError";
import TogglePermission from "../../components/Dashboard/TogglePermission";

const options = Array(10).fill({ name: "Manage user", value: true });
const AdminRoleEdit = () => {
  const [roleName, setRoleName] = useState("");
  const [desc, setDesc] = useState("");
  const [permissions, setPermissions] = useState(options);

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
        <h5 className="text-xl xl:text-3xl font-semibold uppercase text-center">
          Edit role
        </h5>

        <div className="mt-10 space-y-8">
          <div className="flex items-start">
            <label className="text-[#647186] text-base font-semibold xl:text-lg w-[160px]">
              Role Name
            </label>
            <div className="flex-1">
              <input
                className="w-full rounded-lg py-1.5 px-5 border-2 border-[#CCC9C9] focus:outline-none text-black max-w-[275px]"
                style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              />
              {!roleName && <MessageError error={"Role name is required"} />}
            </div>
          </div>
          <div className="flex items-start">
            <label className="text-[#647186] text-base font-semibold xl:text-lg w-[160px]">
              Description
            </label>
            <div className="flex-1">
              <textarea
                className="min-h-[105px] max-w-[512px] w-full rounded-lg py-1.5 px-5 border-2 border-[#CCC9C9] focus:outline-none text-black"
                style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              />
              {!desc && <MessageError error={"Description is required"} />}
            </div>
          </div>
          <div className="flex items-start">
            <label className="text-[#647186] text-base font-semibold xl:text-lg w-[160px]">
              Permissions
            </label>

            <div className="flex-1 border border-black rounded-lg bg-[#E5F3F3] px-10 py-8">
              <table className="w-full">
                <tr>
                  <th className="pb-4 text-lg text-center xl:text-2xl font-semibold">
                    Permission Name
                  </th>
                  <th className="pb-4 text-lg text-center xl:text-2xl font-semibold">
                    Permission Set
                  </th>
                </tr>
                {permissions?.map((permission, curIndex) => (
                  <tr key={curIndex}>
                    <td className="py-4 text-lg text-center xl:text-2xl">
                      Manage user
                    </td>
                    <td>
                      <TogglePermission
                        value={permission.value}
                        togglePermission={() =>
                          setPermissions((prev) =>
                            prev?.map((item, index) =>
                              index === curIndex
                                ? { ...item, value: !item.value }
                                : item
                            )
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 xl:mt-[54px] flex space-x-3 justify-end">
          <Link to={ROUTES_PATHS.ADMIN_ROLE} className="flex justify-end">
            <button className="text-white gap-4 px-4 py-2 bg-[#4AA976] rounded-lg font-semibold w-[150px] text-center">
              Save
            </button>
          </Link>
          <Link to={ROUTES_PATHS.ADMIN_ROLE} className="flex justify-end">
            <button className="text-black gap-4 px-4 py-2 border border-black rounded-lg w-[150px] text-center font-bold">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminRoleEdit;
