import { HTMLAttributes, ReactNode } from "react";

type TextAttributes = HTMLAttributes<HTMLParagraphElement>;

export type TextProps = TextAttributes & {
  children?: ReactNode;
  className?: string;
  id?: string;
};
