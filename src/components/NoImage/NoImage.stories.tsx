import { Meta, Story } from "@storybook/react";

import { NoImage } from "./NoImage";
import { NoImageProps } from "./NoImage.type";
import css from "./Story.module.scss";

export default {
  title: "COMPONENTS/NoImage",
  component: NoImage,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<NoImageProps> = (args) => (
  <div className={css.Story}>
    <div>
      <NoImage {...args} />
    </div>
    <div>
      <NoImage {...args} />
    </div>
    <div>
      <NoImage {...args} />
    </div>
    <div>
      <NoImage {...args} />
    </div>
    <div>
      <NoImage {...args} />
    </div>
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
