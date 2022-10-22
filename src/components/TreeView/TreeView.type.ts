import { ReactNode } from "react";

type CommonProps = {
  className?: string;
  children?: ReactNode;
};

export type TreeViewProps = ControlledTreeProps | UncontrolledTreeProps;

export type ControlledTreeProps = CommonProps & {
  activeNodeId?: string;
  /**
   * a set of expanded node ids.
   * setting this property will also mean
   * that you need to handle node expansion manually
   */
  expanded: Set<string>;
  onNodeClick: (nodeId: string, expanded?: boolean) => void;
};

export type UncontrolledTreeProps = CommonProps & {
  expanded?: never;
  onNodeClick?: (nodeId: string, expanded?: boolean) => void;
};

export type TreeViewContextType = Pick<TreeViewProps, "onNodeClick"> & {
  isActive?: (nodeId: string) => boolean;
  isExpanded?: (nodeId: string) => boolean;
};

export const isControlledTree = (
  props: TreeViewProps,
): props is ControlledTreeProps => !!(props as ControlledTreeProps).expanded;
