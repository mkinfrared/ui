import { Meta, Story } from "@storybook/react";

import css from "./Story.module.scss";
import { TreeNode } from "./TreeNode";
import { TreeNodeProps } from "./TreeNode.type";

export default {
  title: "UI/TreeNode",
  component: TreeNode,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<TreeNodeProps> = (args) => (
  <div className={css.Story}>
    <TreeNode {...args} />
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
