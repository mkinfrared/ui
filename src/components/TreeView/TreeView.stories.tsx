import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import TreeNode from "components/TreeNode";

import css from "./Story.module.scss";
import TreeView from "./TreeView";
import { TreeViewProps } from "./TreeView.type";

export default {
  title: "UI/TreeView",
  component: TreeView,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const UncontrolledTemplate: Story<TreeViewProps> = () => (
  <div className={css.Story}>
    <TreeView>
      <TreeNode label="Root 1" nodeId="1">
        <TreeNode label="Child 1" nodeId="2">
          <TreeNode label="Grand Child 1" nodeId="3" />
          <TreeNode label="Grand Child 2" nodeId="4" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="Root 2" nodeId="5">
        <TreeNode label="Child 1" nodeId="6">
          <TreeNode label="Grand Child 1" nodeId="7" />
          <TreeNode label="Grand Child 2" nodeId="8" />
        </TreeNode>
        <TreeNode label="Child 2" nodeId="9">
          <TreeNode label="Grand Child 1" nodeId="10" />
          <TreeNode label="Grand Child 2" nodeId="11" />
        </TreeNode>
        <TreeNode label="Child 3" nodeId="12">
          <TreeNode label="Grand Child 1" nodeId="13" />
          <TreeNode label="Grand Child 2" nodeId="14" />
          <TreeNode label="Grand Child 2" nodeId="15" />
          <TreeNode label="Grand Child 2" nodeId="16" />
          <TreeNode label="Grand Child 2" nodeId="17" />
        </TreeNode>
        <TreeNode label="Child 4" nodeId="18">
          <TreeNode label="Grand Child 1" nodeId="19" />
          <TreeNode label="Grand Child 2" nodeId="20" />
          <TreeNode label="Grand Child 2" nodeId="21" />
          <TreeNode label="Grand Child 2" nodeId="22" />
          <TreeNode label="Grand Child 2" nodeId="23" />
        </TreeNode>
        <TreeNode label="Child 3" nodeId="24">
          <TreeNode label="Grand Child 1" nodeId="25" />
          <TreeNode label="Grand Child 2" nodeId="26" />
          <TreeNode label="Grand Child 2" nodeId="27" />
          <TreeNode label="Grand Child 2" nodeId="28" />
          <TreeNode label="Grand Child 2" nodeId="29" />
        </TreeNode>
        <TreeNode label="Child 3" nodeId="30">
          <TreeNode label="Grand Child 1" nodeId="31" />
          <TreeNode label="Grand Child 2" nodeId="32" />
          <TreeNode label="Grand Child 2" nodeId="33" />
          <TreeNode label="Grand Child 2" nodeId="34" />
          <TreeNode label="Grand Child 2" nodeId="35">
            <TreeNode label="Grand Grand Child 2" nodeId="36" />
            <TreeNode label="Grand Grand Child 2" nodeId="37" />
            <TreeNode label="Grand Grand Child 2" nodeId="38" />
            <TreeNode label="Grand Grand Child 2" nodeId="39" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="Child 3" nodeId="40">
          <TreeNode label="Grand Child 1" nodeId="41" />
          <TreeNode label="Grand Child 2" nodeId="42" />
          <TreeNode label="Grand Child 2" nodeId="43" />
          <TreeNode label="Grand Child 2" nodeId="44" />
          <TreeNode label="Grand Child 2" nodeId="45" />
        </TreeNode>
        <TreeNode label="Child 3" nodeId="46">
          <TreeNode label="Grand Child 1" nodeId="47" />
          <TreeNode label="Grand Child 2" nodeId="48" />
          <TreeNode label="Grand Child 2" nodeId="49" />
          <TreeNode label="Grand Child 2" nodeId="50" />
          <TreeNode label="Grand Child 2" nodeId="51" />
        </TreeNode>
      </TreeNode>
    </TreeView>
  </div>
);

const ControlledTemplate: Story<TreeViewProps> = () => {
  const [expanded, setExpanded] = useState(new Set(["1", "2", "5", "12"]));

  const [activeNodeId, setActiveNodeId] = useState<string | undefined>(
    undefined,
  );

  const handleNodeClick = (nodeId: string) => {
    setExpanded((prevState) => {
      if (prevState.has(nodeId)) {
        prevState.delete(nodeId);
      } else {
        prevState.add(nodeId);
      }

      return new Set(prevState);
    });

    setActiveNodeId(nodeId);
  };

  return (
    <div className={css.Story}>
      <TreeView
        expanded={expanded}
        onNodeClick={handleNodeClick}
        activeNodeId={activeNodeId}
      >
        <TreeNode label="Root 1" nodeId="1">
          <TreeNode label="Child 1" nodeId="2">
            <TreeNode label="Grand Child 1" nodeId="3" />
            <TreeNode label="Grand Child 2" nodeId="4" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="Root 2" nodeId="5">
          <TreeNode label="Child 1" nodeId="6">
            <TreeNode label="Grand Child 1" nodeId="7" />
            <TreeNode label="Grand Child 2" nodeId="8" />
          </TreeNode>
          <TreeNode label="Child 2" nodeId="9">
            <TreeNode label="Grand Child 1" nodeId="10" />
            <TreeNode label="Grand Child 2" nodeId="11" />
          </TreeNode>
          <TreeNode label="Child 3" nodeId="12">
            <TreeNode label="Grand Child 1" nodeId="13" />
            <TreeNode label="Grand Child 2" nodeId="14" />
            <TreeNode label="Grand Child 2" nodeId="15" />
            <TreeNode label="Grand Child 2" nodeId="16" />
            <TreeNode label="Grand Child 2" nodeId="17" />
          </TreeNode>
          <TreeNode label="Child 4" nodeId="18">
            <TreeNode label="Grand Child 1" nodeId="19" />
            <TreeNode label="Grand Child 2" nodeId="20" />
            <TreeNode label="Grand Child 2" nodeId="21" />
            <TreeNode label="Grand Child 2" nodeId="22" />
            <TreeNode label="Grand Child 2" nodeId="23" />
          </TreeNode>
          <TreeNode label="Child 3" nodeId="24">
            <TreeNode label="Grand Child 1" nodeId="25" />
            <TreeNode label="Grand Child 2" nodeId="26" />
            <TreeNode label="Grand Child 2" nodeId="27" />
            <TreeNode label="Grand Child 2" nodeId="28" />
            <TreeNode label="Grand Child 2" nodeId="29" />
          </TreeNode>
          <TreeNode label="Child 3" nodeId="30">
            <TreeNode label="Grand Child 1" nodeId="31" />
            <TreeNode label="Grand Child 2" nodeId="32" />
            <TreeNode label="Grand Child 2" nodeId="33" />
            <TreeNode label="Grand Child 2" nodeId="34" />
            <TreeNode label="Grand Child 2" nodeId="35">
              <TreeNode label="Grand Grand Child 2" nodeId="36" />
              <TreeNode label="Grand Grand Child 2" nodeId="37" />
              <TreeNode label="Grand Grand Child 2" nodeId="38" />
              <TreeNode label="Grand Grand Child 2" nodeId="39" />
            </TreeNode>
          </TreeNode>
          <TreeNode label="Child 3" nodeId="40">
            <TreeNode label="Grand Child 1" nodeId="41" />
            <TreeNode label="Grand Child 2" nodeId="42" />
            <TreeNode label="Grand Child 2" nodeId="43" />
            <TreeNode label="Grand Child 2" nodeId="44" />
            <TreeNode label="Grand Child 2" nodeId="45" />
          </TreeNode>
          <TreeNode label="Child 3" nodeId="46">
            <TreeNode label="Grand Child 1" nodeId="47" />
            <TreeNode label="Grand Child 2" nodeId="48" />
            <TreeNode label="Grand Child 2" nodeId="49" />
            <TreeNode label="Grand Child 2" nodeId="50" />
            <TreeNode label="Grand Child 2" nodeId="51" />
          </TreeNode>
        </TreeNode>
      </TreeView>
    </div>
  );
};

const Uncontrolled = UncontrolledTemplate.bind({});
const Controlled = ControlledTemplate.bind({});

Uncontrolled.args = {};

Uncontrolled.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Uncontrolled, Controlled };
