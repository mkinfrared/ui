import { render } from "@testing-library/react";

import { TreeView } from "./TreeView";

describe("<TreeView />", () => {
  const Component = <TreeView />;

  it("should be defined", () => {
    expect(TreeView).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TreeView");

    expect(element).toBeDefined();
  });
});
