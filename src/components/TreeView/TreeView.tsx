import { memo } from "react";

import ControlledTree from "components/TreeView/ControlledTree";
import UncontrolledTree from "components/TreeView/UncontrolledTree";

import { TreeViewProps } from "./TreeView.type";

const TreeView = ({ children, expanded, ...rest }: TreeViewProps) => {
  if (expanded !== undefined) {
    return (
      <ControlledTree expanded={expanded} {...rest}>
        {children}
      </ControlledTree>
    );
  }

  return <UncontrolledTree {...rest}>{children}</UncontrolledTree>;
};

export { TreeView };

export default memo(TreeView);
