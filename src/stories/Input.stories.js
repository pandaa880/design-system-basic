import React from "react";

import Input from "../components/Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { type: "email", background: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
