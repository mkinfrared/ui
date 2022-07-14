import React, { memo } from "react";

import { classNames } from "utils";

import css from "./Text.module.scss";
import { TextProps } from "./Text.type";

const Text = ({ children, className, id }: TextProps) => (
  <p className={classNames(css.Text, className)} id={id} data-testid="Text">
    {children}
  </p>
);

export { Text };

export default memo(Text);
