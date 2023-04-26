import { DrawerProps } from "../Drawer.type";

const DrawerMock = (props: DrawerProps) => (
  <div data-testid="Drawer">{JSON.stringify(props)}</div>
);

export default DrawerMock;
