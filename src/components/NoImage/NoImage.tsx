import { ReactComponent as Cross } from "icons/cross-circle.svg";
import { classNames } from "utils";

import css from "./NoImage.module.scss";
import { NoImageProps } from "./NoImage.type";

const NoImage = ({ className }: NoImageProps) => (
  <div className={classNames(css.NoImage, className)} data-testid="NoImage">
    <Cross className={css.cross} />
  </div>
);

export default NoImage;
