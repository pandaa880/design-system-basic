import styled from "styled-components";

export const MainContainer = styled.div`
  pointer-events: all;
  position: relative;
  font-size: 14px;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${(props) =>
    props.focused ? "rgb(255, 255, 255)" : "rgb(250, 251, 252)"};
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.focused
      ? "rgb(76, 154, 255)"
      : props.error
      ? "rgb(222, 53, 11)"
      : "rgb(223, 225, 230)"};

  &:hover {
    background-color: ${(props) => !props.focused && "rgb(235, 236, 240)"};
  }
`;

export const InputContainer = styled.div`
  align-items: center;
  background-color: transparent;
  border: 0px;
  box-sizing: border-box;
  color: rgb(9, 30, 66);
  cursor: text;
  display: flex;
  flex: 1 1 100%;
  font-size: 14px;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s;
  overflow-wrap: break-word;
  vertical-align: top;
  pointer-events: auto;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 0px;
  box-sizing: border-box;
  color: inherit;
  cursor: inherit;
  font-size: 14px;
  min-width: 0px;
  outline: none;
  padding: 8px 6px;
  width: 100%;
  height: 2.5em;
  line-height: 1.4;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.div`
  color: rgb(66, 82, 110);
  display: flex;
  transition: color 150ms ease 0s;
  box-sizing: border-box;
  padding: 6px 2px;

  & svg {
    transition: transform 200ms ease 0s;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

export const DropdownContainer = styled.div`
  top: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(223, 225, 230);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 4px 11px;
  margin-bottom: 8px;
  margin-top: 8px;
  position: absolute;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
`;

export const MenuList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;
  box-sizing: border-box;
`;

export const Menu = styled.div`
  display: block;
  font-size: inherit;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.selected ? "rgb(76, 154, 255)" : "transparent"};
  cursor: pointer;
  color: ${(props) => (props.selected ? "#fff" : "initial")};

  &:hover {
    background-color: ${(props) =>
      props.selected ? "rgb(76, 154, 255)" : "rgb(235, 236, 240)"};
  }
`;
