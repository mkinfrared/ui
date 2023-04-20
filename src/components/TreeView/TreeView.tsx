import ControlledTree from "components/TreeView/ControlledTree";
import UncontrolledTree from "components/TreeView/UncontrolledTree";

import { TreeViewProps, isControlledTree } from "./TreeView.type";

const TreeView = (props: TreeViewProps) => {
  const { children } = props;

  if (isControlledTree(props)) {
    return <ControlledTree {...props}>{children}</ControlledTree>;
  }

  return <UncontrolledTree {...props}>{children}</UncontrolledTree>;
};

export default TreeView;
