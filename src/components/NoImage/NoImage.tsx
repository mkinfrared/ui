import { memo } from "react";

import { classNames } from "utils";

import { ReactComponent as Cross } from "../../icons/cross-circle.svg";

import css from "./NoImage.module.scss";
import { NoImageProps } from "./NoImage.type";

const NoImage = ({ className }: NoImageProps) => (
  <div className={classNames(css.NoImage, className)} data-testid="NoImage">
    <Cross className={css.cross} />
  </div>
);

export { NoImage };

export default memo(NoImage);
