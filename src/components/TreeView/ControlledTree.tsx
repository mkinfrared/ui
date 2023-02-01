import { useMemo } from "react";

import TreeViewContext from "components/TreeView/TreeViewContext";
import { classNames } from "utils";

import css from "./TreeView.module.scss";
import { ControlledTreeProps } from "./TreeView.type";
import useTreeAccessibility from "./useTreeAccessibility";

const ControlledTree = ({
  children,
  className,
  onNodeClick,
  expanded,
  activeNodeId,
}: ControlledTreeProps) => {
  const refCallback = useTreeAccessibility(onNodeClick);
  const isActive = (nodeId: string) => activeNodeId === nodeId;
  const isExpanded = (nodeId: string) => expanded.has(nodeId);

  const handleNodeClick = (nodeId: string) => {
    onNodeClick?.(nodeId);
  };

  const value = useMemo(
    () => ({
      isActive,
      isExpanded,
      onNodeClick: handleNodeClick,
    }),
    [handleNodeClick, isActive, isExpanded],
  );

  return (
    <TreeViewContext.Provider value={value}>
      <ul
        className={classNames(css.TreeView, className)}
        role="tree"
        data-testid="UncontrolledTreeView"
        ref={refCallback}
      >
        {children}
      </ul>
    </TreeViewContext.Provider>
  );
};

export default ControlledTree;
