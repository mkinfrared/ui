import { classNames } from "utils";

import css from "./ListItem.module.scss";
import { ListItemProps } from "./ListItem.type";

const ListItem = ({ children, className }: ListItemProps) => (
  <div className={classNames(css.ListItem, className)} data-testid="ListItem">
    {children}
  </div>
);

export default ListItem;
