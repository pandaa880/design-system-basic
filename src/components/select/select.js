import React, { useState, useEffect, useRef } from "react";

import {
  MainContainer,
  ValueContainer,
  InputContainer,
  StyledInput,
  Indicators,
  Indicator,
} from "./styles";
import Dropdown from "./dropdown";
import { useToggle } from "../../hooks/useToggle";

function Select({
  name,
  options,
  value,
  onChange,
  onBlur,
  placeholderText,
  auto_focus,
}) {
  const [dropdownOptions, setOptions] = useState([]);
  const [inputValue, setValue] = useState("");
  const [selectedOption, setOption] = useState(null);

  const dropdown = useToggle();
  const focused = useToggle();

  // create a ref for container
  const mainContainerRef = useRef(null);

  /**
   * handle outside click
   */
  const handleOutsideClick = (e) => {
    const isOwnNode =
      mainContainerRef.current !== null &&
      mainContainerRef.current.contains(e.target);

    if (dropdown.on === true && !isOwnNode) {
      dropdown.toggle();
    }
  };

  useEffect(() => {
    if (options) {
      setOptions(options);
    }
  }, [options]);

  /**
   * set up event listeners for mouseup and mousedown
   */
  useEffect(() => {
    document.addEventListener("mouseup", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  });

  /**
   * toggle the dropdown upon click
   */
  const handleClick = () => {
    dropdown.toggle();
  };

  /**
   * handles event when user removes the focus from input
   * @param {object} e Event Object
   */
  const handleBlurEvent = (e) => {
    focused.toggle();
    onBlur(selectedOption);
  };

  /**
   * handles event when user focus on input
   * @param {object} e Event Object
   */
  const handleFocus = (e) => {
    focused.toggle();
  };

  /**
   * handle option select
   */
  const handleSelect = (option) => {
    if (option) {
      onChange(option);
      setValue(option.label);
      setOption(option);
      setOptions(options);
      dropdown.toggle();
    }
  };

  /**
   * handle search
   */
  const handleSearch = (e) => {
    const val = e.target.value.toString();
    const search_query = val.toLowerCase();

    const filtered_options = options.filter(
      (item) => item.label.toLowerCase().indexOf(search_query) !== -1
    );

    setValue(val);
    setOptions(filtered_options);
    setOption(null);
  };

  // update the selected option when value is received from props
  useEffect(() => {
    let initial_selection = null;
    if (value) {
      initial_selection = options.filter((item) => item.value === value);

      if (initial_selection.length !== 0) {
        setOption(initial_selection[0]);
        initial_selection = initial_selection[0];
      }
    }

    setValue((initial_selection && initial_selection.label) || "");
  }, [value]);
  return (
    <MainContainer ref={mainContainerRef}>
      <ValueContainer focused={focused.on}>
        <InputContainer>
          <StyledInput
            name={name}
            type="text"
            value={inputValue}
            placeholder={placeholderText}
            onChange={handleSearch}
            onClick={handleClick}
            onBlur={handleBlurEvent}
            onFocus={handleFocus}
            autoFocus={auto_focus}
          />
        </InputContainer>
        <Indicators>
          <Indicator isOpen={dropdown.on}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              role="presentation"
            >
              <path
                d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </Indicator>
        </Indicators>
      </ValueContainer>
      {dropdown.on && (
        <Dropdown
          options={dropdownOptions}
          onOptionSelect={handleSelect}
          selectedOption={selectedOption}
        />
      )}
    </MainContainer>
  );
}

Select.defaultProps = {
  name: "",
  value: "",
  auto_focus: false,
  placeholder: "Enter here...",
  onChange: () => {},
  onBlur: () => {},
};

export default Select;
