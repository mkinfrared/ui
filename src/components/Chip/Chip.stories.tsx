import { Meta, Story } from "@storybook/react";

import Chip from "./Chip";
import { ChipProps } from "./Chip.type";
import css from "./Story.module.scss";

export default {
  title: "UI/Chip",
  component: Chip,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<ChipProps> = (args) => (
  <div className={css.Story}>
    <Chip {...args} />
  </div>
);

const Default = Template.bind({});
const WithDelete = Template.bind({});

Default.args = {
  label: "Marklar",
  onDelete: undefined,
};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

WithDelete.args = {
  label: "Deletable",
};

export { Default, WithDelete };
