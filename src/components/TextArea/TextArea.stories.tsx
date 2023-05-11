import { Meta, Story } from "@storybook/react";

import css from "./Story.module.scss";
import TextArea from "./TextArea";
import { TextAreaProps } from "./TextArea.type";

export default {
  title: "UI/TextArea",
  component: TextArea,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <div className={css.Story}>
    <TextArea {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {
  label: "Foobar",
  value:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa dignissimos, iure qui repudiandae voluptate? Laboriosam modi natus nisi quas.",
};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default };
