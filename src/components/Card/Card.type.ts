import { HTMLAttributes, ReactNode, Ref } from "react";

type CardAttributes = HTMLAttributes<HTMLDivElement>;

export type CardProps = CardAttributes & {
  cardRef?: Ref<HTMLDivElement>;
  children?: ReactNode;
  className?: string;
};
