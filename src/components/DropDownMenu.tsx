import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

type DropDownMenuLabels = {
  menuLabels: string[];
};

const DropDownMenu = ({ menuLabels }: DropDownMenuLabels) => {
  return (
    <Dropdown>
      <DropdownTrigger className="m-2 bg-[#0a0116] w-2 sm:w-4">
        <button>
          <IoMenu />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        {menuLabels.map((label, index) => (
          <DropdownItem
            key={index}
            href={`/${label.toLowerCase()}`}
            className="bg-[#fff6ea] text-[#2e1a47]"
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownMenu;
