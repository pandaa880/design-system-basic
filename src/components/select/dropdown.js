import React from "react";

import { DropdownContainer, MenuList } from "./styles";
import DropdownOption from "./dropdown-option";

function Dropdown({ options, onOptionSelect, selectedOption }) {
  return (
    <DropdownContainer>
      <MenuList>
        {options.length === 0 ? (
          <DropdownOption>No Option</DropdownOption>
        ) : null}
        {options.map((item) => (
          <DropdownOption
            key={item.value}
            {...item}
            onOptionSelect={onOptionSelect}
            selectedOption={selectedOption}
          />
        ))}
      </MenuList>
    </DropdownContainer>
  );
}

export default Dropdown;
