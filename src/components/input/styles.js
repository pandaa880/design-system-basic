import styled from "styled-components";

export const InputContainer = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.focused ? "rgb(255, 255, 255)" : "rgb(250, 251, 252)"};
  border-color: ${(props) =>
    props.focused
      ? "rgb(76, 154, 255)"
      : props.error
      ? "rgb(222, 53, 11)"
      : "rgb(223, 225, 230)"};
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
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

  &:hover {
    background-color: ${(props) => !props.focused && "rgb(235, 236, 240)"};
  }
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

export const HelperTextContainer = styled.div`
  margin: 4px 6px 0 6px;
  display: flex;
  justify-content: space-between;
`;

export const HelpText = styled.span`
  display: inline-block;
  color: ${(props) =>
    props.error ? "rgb(222, 53, 11)" : "rgb(107, 119, 140)"};
  font-size: 12px;
  line-height: 1.3;
`;

export const CharacterLength = styled.span`
  display: inline-block;
  color: rgb(107, 119, 140);
  font-size: 12px;
  line-height: 1.3;
`;
