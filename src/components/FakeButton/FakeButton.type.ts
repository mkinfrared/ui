export type FakeButtonProps = {
  autoFocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  "data-testid"?: string;
  onClick?: (event: React.MouseEvent) => void;
  tabIndex?: number;
};
