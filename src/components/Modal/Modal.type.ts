import { ReactNode } from "react";

export type ModalProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: string;
};
