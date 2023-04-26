import { classNames } from "utils";

import css from "./Card.module.scss";
import { CardProps } from "./Card.type";

const Card = ({ cardRef, children, className, ...rest }: CardProps) => (
  <div
    {...rest}
    className={classNames(css.Card, className)}
    data-testid="Card"
    ref={cardRef}
  >
    {children}
  </div>
);

export default Card;
