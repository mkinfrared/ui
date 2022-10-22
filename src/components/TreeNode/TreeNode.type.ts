import { ReactNode } from "react";

export type TreeNodeProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  children?: ReactNode;
  label: string;
  nodeId: string;
};

export type DoneCallback = () => void;
