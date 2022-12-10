/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import Text from "components/Text";

import { FakeButton } from "./FakeButton";
import { FakeButtonProps } from "./FakeButton.type";
import css from "./Story.module.scss";

export default {
  title: "UI/FakeButton",
  component: FakeButton,
} as Meta;

const Template: Story<FakeButtonProps> = (args) => (
  <div className={css.Story} onClick={action("Bubbled Synthetic Click")}>
    <FakeButton {...args} />
    <FakeButton {...args} />
    <FakeButton {...args} autoFocus />
    <FakeButton {...args} />
    <FakeButton {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {
  children: <Text>I am a Fake Button</Text>,
  onClick: action("Synthetic Event"),
};

export { Default };
