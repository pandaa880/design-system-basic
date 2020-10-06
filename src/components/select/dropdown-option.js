import React from "react";

import { Menu } from "./styles";

function DropdownOption({ onOptionSelect, value, label, selectedOption }) {
  const handleOptionClick = () => {
    onOptionSelect({
      value,
      label,
    });
  };

  return (
    <Menu
      onClick={handleOptionClick}
      selected={selectedOption && selectedOption.value === value}
    >
      {label}
    </Menu>
  );
}

export default DropdownOption;
