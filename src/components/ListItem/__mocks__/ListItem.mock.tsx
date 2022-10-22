import { ListItemProps } from "../ListItem.type";

const ListItemMock = (props: ListItemProps) => (
  <div data-testid="ListItem">{JSON.stringify(props)}</div>
);

export default ListItemMock;
