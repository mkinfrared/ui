export type ChipProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  label?: string;
  onClick?: () => void;
  onDelete?: () => void;
};
