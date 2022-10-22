import { TreeViewProps } from "../TreeView.type";

const TreeViewMock = (props: TreeViewProps) => (
  <div data-testid="TreeView">{JSON.stringify(props)}</div>
);

export default TreeViewMock;
