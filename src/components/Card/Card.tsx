import { memo } from "react";

import { classNames } from "utils";

import css from "./Card.module.scss";
import { CardProps } from "./Card.type";

const Card = ({ children, className }: CardProps) => (
  <div className={classNames(css.Card, className)} data-testid="Card">
    {children}
  </div>
);

export { Card };

export default memo(Card);
