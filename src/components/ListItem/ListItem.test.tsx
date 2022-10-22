import { render } from "@testing-library/react";

import ListItem from "./ListItem";

describe("<ListItem />", () => {
  const Component = <ListItem />;

  it("should be defined", () => {
    expect(ListItem).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("ListItem");

    expect(element).toBeDefined();
  });
});
