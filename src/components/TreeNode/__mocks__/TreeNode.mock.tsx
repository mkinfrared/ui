import { TreeNodeProps } from "../TreeNode.type";

const TreeNodeMock = (props: TreeNodeProps) => (
  <div data-testid="TreeNode">{JSON.stringify(props)}</div>
);

export default TreeNodeMock;
