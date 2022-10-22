import { ReactNode } from "react";

export type TreeViewProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  children?: ReactNode;
  /**
   * a set of expanded node ids.
   * setting this property will also mean
   * that you need to handle node expansion manually
   */
  expanded?: Set<string>;
  activeNodeId?: string;
  onNodeClick?: (nodeId: string) => void;
};

export type ControlledTreeProps = RequiredProps<TreeViewProps, "expanded">;

export type UncontrolledTreeProps = Omit<
  TreeViewProps,
  "expanded" | "activeNodeId"
>;

export type TreeViewContextType = Pick<TreeViewProps, "onNodeClick"> & {
  isActive?: (nodeId: string) => boolean;
  isExpanded?: (nodeId: string) => boolean;
};
