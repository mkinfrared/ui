import { Meta, Story } from "@storybook/react";

import TreeNode from "components/TreeNode";

import css from "./Story.module.scss";
import { TreeView } from "./TreeView";
import { TreeViewProps } from "./TreeView.type";

export default {
  title: "COMPONENTS/TreeView",
  component: TreeView,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const UncontrolledTemplate: Story<TreeViewProps> = () => (
  <div className={css.Story}>
    <TreeView>
      <TreeNode label="Root 1" nodeId="1">
        <TreeNode label="Child 2" nodeId="2">
          <TreeNode label="Grand Child 3" nodeId="3" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="Root 2" nodeId="4">
        <TreeNode label="Child 2" nodeId="5" />
      </TreeNode>
    </TreeView>
  </div>
);

const Default = UncontrolledTemplate.bind({});

Default.args = {};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default };
