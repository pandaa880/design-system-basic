import React from "react";

import Select from "../components/select";
import withDetails from "../decorators/withDetails";

const options = [
  {
    label: "Choclate",
    value: "choclate",
  },
  {
    label: "Choco Lava",
    value: "choco lava",
  },
  {
    label: "Vanilla",
    value: "vanilla",
  },
  {
    label: "Strawberry",
    value: "strawberry",
  },
  {
    label: "Blueberry",
    value: "blueberry",
  },
  {
    label: "Tender Coconut",
    value: "tender coconut",
  },
];

export default {
  title: "Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  placeholderText: "Type to search...",
};
Default.decorators = [
  (story) =>
    withDetails(
      story,
      "Basic Select",
      "Displays the basic select with placeholder."
    ),
];

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  ...Default.args,
  value: "vanilla",
  placeholderText: "Select...",
};
WithInitialValue.decorators = [
  (story) =>
    withDetails(
      story,
      "Select with Initial Selected value",
      "Displays the select with initial value."
    ),
];
