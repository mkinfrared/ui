import { Meta, Story } from "@storybook/react";

import MenuItem from "./MenuItem";
import { MenuItemProps } from "./MenuItem.type";
import css from "./Story.module.scss";

export default {
  title: "UI/MenuItem",
  component: MenuItem,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<MenuItemProps<any>> = (args) => (
  <div className={css.Story}>
    <MenuItem {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default };
