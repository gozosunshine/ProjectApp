import React, { useState } from "react";
import FilterDropdownSelect from "../../components/Filter/DropdownSelect";
import {
  ticketPriorities,
  ticketStatus,
  ticketTypes,
} from "../../components/Filter/InitState";

const AdminTicket = () => {
  const [ticketTypesSelected, setTicketTypesSelected] = useState(ticketTypes);
  const [ticketPrioritiesSelected, setTicketPrioritiesSelected] =
    useState(ticketPriorities);
  const [ticketStatusSelected, setTicketStatusSelected] =
    useState(ticketStatus);

  const ticketTypesSelectedNormalized = ticketTypesSelected?.map(
    (item) => item?.value
  );
  const ticketPrioritiesSelectedNormalized = ticketPrioritiesSelected?.map(
    (item) => item?.value
  );
  const ticketStatusSelectedNormalized = ticketStatusSelected?.map(
    (item) => item?.value
  );

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
        <div className="py-[45px] px-10 grid grid-cols-3 gap-y-[60px] gap-x-[68px]"></div>
      </div>
    </>
  );
};

export default AdminTicket;
