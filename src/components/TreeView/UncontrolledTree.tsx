import { useState } from "react";

import { classNames } from "utils";

import css from "./TreeView.module.scss";
import { UncontrolledTreeProps } from "./TreeView.type";
import TreeViewContext from "./TreeViewContext";
import useTreeAccessibility from "./useTreeAccessibility";

const UncontrolledTree = ({
  className,
  children,
  onNodeClick,
}: UncontrolledTreeProps) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set<string>());
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const refCallback = useTreeAccessibility((nodeId, expanded) => {
    setExpandedNodes((prevState) => {
      if (expanded) {
        prevState.add(nodeId);
      } else {
        prevState.delete(nodeId);
      }

      return new Set(prevState);
    });
  });

  const isExpanded = (nodeId: string) => expandedNodes.has(nodeId);
  const isActive = (nodeId: string) => activeNode === nodeId;

  const handleNodeClick = (nodeId: string) => {
    setExpandedNodes((prevState) => {
      if (prevState.has(nodeId)) {
        prevState.delete(nodeId);
      } else {
        prevState.add(nodeId);
      }

      return new Set(prevState);
    });

    setActiveNode(nodeId);

    onNodeClick?.(nodeId);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isExpanded,
    onNodeClick: handleNodeClick,
    isActive,
  };

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

export default UncontrolledTree;
