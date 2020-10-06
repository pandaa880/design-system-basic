import React from "react";

import Input from "../components/input";
import withDetails from "../decorators/withDetails";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  type: "text",
  name: "TextInput",
  value: "",
  autoFocus: true,
};
Default.decorators = [
  (story) =>
    withDetails(
      story,
      "Basic Text Input with default props and validations with auto focus",
      ""
    ),
];

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  ...Default.args,
  helpText: "This is a help text",
  autoFocus: false,
};
WithHelpText.decorators = [
  (story) => withDetails(story, "Input with help text", ""),
];

export const InputWithHelpTextAndCounter = Template.bind({});
InputWithHelpTextAndCounter.args = {
  ...Default.args,
  helpText: "This is a help text",
  autoFocus: false,
  show_length_counter: true,
};
InputWithHelpTextAndCounter.decorators = [
  (story) =>
    withDetails(
      story,
      "Input with help text and counter",
      "Displayes help text and counter. Default value of max characters is 100. Trailing spaces are excluded from validation. Counter is only available on type text and email."
    ),
];

export const InputWithMinimumLength = Template.bind({});
InputWithMinimumLength.args = {
  ...Default.args,
  minLength: 10,
  show_length_counter: true,
};
InputWithMinimumLength.decorators = [
  (story) =>
    withDetails(
      story,
      "Input with minimum length validation",
      "Accepts minimum 10 characters"
    ),
];

export const InputWithMaximumLength = Template.bind({});
InputWithMaximumLength.args = {
  ...Default.args,
  maxLength: 10,
  show_length_counter: true,
  helpText: "You can only enter upto 10 characters",
};
InputWithMaximumLength.decorators = [
  (story) =>
    withDetails(
      story,
      "Input with maximum length validation",
      "Accepts maximum 10 characters"
    ),
];

export const EmailInput = Template.bind({});
EmailInput.args = {
  ...Default.args,
  type: "email",
  autoFocus: true,
};
EmailInput.decorators = [
  (story) => withDetails(story, "Input type of Email", "Accepts only email"),
];

export const NumberInput = Template.bind({});
NumberInput.args = {
  ...Default.args,
  type: "number",
  autoFocus: true,
};
NumberInput.decorators = [
  (story) => withDetails(story, "Input type of Number", "Accepts only numbers"),
];
