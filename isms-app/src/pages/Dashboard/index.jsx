import React from "react";
import {
  ticketPriorities,
  ticketStatus,
  ticketTypes,
} from "../../components/Filter/InitState";
import FilterDropdownSelect from "../../components/Filter/DropdownSelect";
import { useState } from "react";

const Dashboard = () => {
  const [ticketTypesSelected, setTicketTypesSelected] = useState(ticketTypes);
  const [ticketPrioritiesSelected, setTicketPrioritiesSelected] =
    useState(ticketPriorities);
  const [ticketStatusSelected, setTicketStatusSelected] =
    useState(ticketStatus);

  return (
    <>
      <div className="bg-[#42526E] pl-[58px] pr-[70px] py-9 grid grid-cols-3 gap-y-5 gap-x-[92px]">
        <FilterDropdownSelect
          selectedValues={ticketTypesSelected}
          setSelectedValues={setTicketTypesSelected}
          options={ticketTypes}
          placeholder="Select type"
          title="Ticket Type"
        />
        <FilterDropdownSelect
          selectedValues={ticketPrioritiesSelected}
          setSelectedValues={setTicketPrioritiesSelected}
          options={ticketPriorities}
          placeholder="Select priority"
          title="Ticket Priority"
        />
        <FilterDropdownSelect
          selectedValues={ticketStatusSelected}
          setSelectedValues={setTicketStatusSelected}
          options={ticketStatus}
          placeholder="Select status"
          title="Ticket Status"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="py-[45px] px-10"></div>
      </div>
    </>
  );
};

export default Dashboard;
