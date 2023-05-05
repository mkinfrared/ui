import { classNames } from "utils";

import css from "./Text.module.scss";
import { TextProps } from "./Text.type";

const Text = ({ children, className, id, ...rest }: TextProps) => (
  <p
    className={classNames(css.Text, className)}
    id={id}
    data-testid="Text"
    {...rest}
  >
    {children}
  </p>
);

export default Text;
