import React, { useState, useEffect, forwardRef } from "react";

import {
  InputContainer,
  StyledInput,
  HelperTextContainer,
  HelpText,
  CharacterLength,
} from "./styles";
import { validateEmail, validateNumber } from "../../constants/validations";

import "../../styles/font.css";

const Input = forwardRef(
  (
    {
      type,
      name,
      value,
      helpText,
      error_message,
      show_length_counter,
      onChange,
      onBlur,
      minLength,
      maxLength,
      required,
      validateOnBlur,
      placeholder,
      autoFocus,
    },
    ref
  ) => {
    const [inputValue, setValue] = useState("");
    const [length, setLength] = useState(0);
    const [focused, setFocused] = useState(false);
    const [errorState, setError] = useState({
      error: false,
      msg: "",
    });

    /**
     * update state when get a new value from props
     */
    useEffect(() => {
      if (value) {
        setValue(value);
      }

      return () => {
        setValue("");
      };
    }, [value]);

    /**
     * update error message when received from props
     */
    useEffect(() => {
      if (error_message) {
        setError({
          error: true,
          msg: error_message,
        });
      }

      return () => {
        setError({
          error: false,
          msg: "",
        });
      };
    }, [error_message]);

    /**
     * validates user input
     * @param {string} val Input Value
     */
    const validateUserInput = (val) => {
      const error_state = {
        error: false,
        msg: "",
      };

      const input = val.trim();
      let type_validation_err = null;

      if (required && input.length === 0) {
        error_state.error = true;
        error_state.msg = "Required";
      }

      if (minLength && input.length < minLength) {
        error_state.error = true;
        error_state.msg = `Min. ${minLength} characters required`;
      }

      if (type === "number") {
        type_validation_err = validateNumber(input);
      }

      if (type === "email") {
        type_validation_err = validateEmail(input);
      }

      if (type_validation_err !== null) {
        error_state.error = true;
        error_state.msg = type_validation_err;
      }

      return error_state;
    };

    /**
     * handle input value when user types
     * @param {object} e Event Object
     */
    const handleInputChange = (e) => {
      const val = e.target.value.toString();

      if (val.length <= maxLength) {
        setLength(val.length);
        onChange(val);
        setValue(val);
      }
    };

    /**
     * handles event when user removes the focus from input
     * @param {object} e Event Object
     */
    const handleBlurEvent = (e) => {
      setFocused(false);
      if (validateOnBlur) {
        const input = e.target.value;
        const error_state = validateUserInput(input);

        onBlur({
          value: input,
          error: error_state,
        });
        setError(error_state);
      }
    };

    /**
     * handles event when user focus on input
     * @param {object} e Event Object
     */
    const handleFocus = (e) => {
      setFocused(true);
    };

    return (
      <div>
        <InputContainer focused={focused} error={errorState.error}>
          <StyledInput
            type={type}
            name={name}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlurEvent}
            onFocus={handleFocus}
            placeholder={placeholder}
            ref={ref}
            autoFocus={autoFocus}
          />
        </InputContainer>
        <HelperTextContainer>
          <div>
            <HelpText error={errorState.error}>
              {errorState.error ? errorState.msg : helpText}
            </HelpText>
          </div>
          <div>
            {show_length_counter && type !== "number" && (
              <CharacterLength>{`${length}/${maxLength}`}</CharacterLength>
            )}
          </div>
        </HelperTextContainer>
      </div>
    );
  }
);

Input.defaultProps = {
  type: "text",
  name: "",
  value: "",
  minLength: 0,
  maxLength: 100,
  show_length_counter: false,
  required: false,
  validateOnBlur: true,
  helpText: "",
  error_message: "",
  auto_focus: false,
  placeholder: "Enter here...",
  onChange: () => {},
  onBlur: () => {},
  customValidation: () => {
    return "";
  },
};

export default Input;
