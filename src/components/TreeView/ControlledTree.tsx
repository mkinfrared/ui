import { useMemo } from "react";

import TreeViewContext from "components/TreeView/TreeViewContext";
import { classNames } from "utils";

import css from "./TreeView.module.scss";
import { ControlledTreeProps } from "./TreeView.type";

const ControlledTree = ({
  children,
  className,
  onNodeClick,
  expanded,
}: ControlledTreeProps) => {
  const isExpanded = (nodeId: string) => expanded.has(nodeId);

  const handleNodeClick = (nodeId: string) => {
    onNodeClick?.(nodeId);
  };

  const value = useMemo(
    () => ({
      isExpanded,
      onNodeClick: handleNodeClick,
    }),
    [handleNodeClick, isExpanded],
  );

  return (
    <TreeViewContext.Provider value={value}>
      <ul
        className={classNames(css.TreeView, className)}
        role="tree"
        data-testid="UncontrolledTreeView"
      >
        {children}
      </ul>
    </TreeViewContext.Provider>
  );
};

export default ControlledTree;
