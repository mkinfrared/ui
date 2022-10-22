/* eslint-disable react/no-array-index-key */
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import css from "./Story.module.scss";
import { useRoverIndex } from "./useRoverIndex";

const UseRoverIndexExample = () => {
  const [count, setCount] = useState(5);
  const refCallback = useRoverIndex(`.${css.listItem}`);

  const list = new Array(count).fill(undefined).map((_, index) => (
    <li key={index} className={css.listItem}>
      Item {index}
    </li>
  ));

  return (
    <div>
      <ul className={css.list} ref={refCallback} data-testid="list">
        {list}
      </ul>
      <button onClick={() => setCount(10)} data-testid="add" type="button">
        Add
      </button>
      <button onClick={() => setCount(5)} data-testid="remove" type="button">
        Remove
      </button>
    </div>
  );
};

export default {
  title: "HOOKS/useRoverIndex",
  component: UseRoverIndexExample,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const ExampleTemplate: Story = () => (
  <div className={css.Story}>
    <UseRoverIndexExample />
  </div>
);

const Example = ExampleTemplate.bind({});

Example.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Example };
