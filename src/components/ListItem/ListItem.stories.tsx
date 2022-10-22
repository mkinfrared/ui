import { Meta, Story } from "@storybook/react";

import Text from "components/Text";
import { useRoverIndex } from "hooks/useRoverIndex";

import ListItem from "./ListItem";
import { ListItemProps } from "./ListItem.type";
import css from "./Story.module.scss";

export default {
  title: "COMPONENTS/ListItem",
  component: ListItem,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<ListItemProps> = (args) => (
  <div className={css.Story}>
    <ListItem {...args} />
  </div>
);

const MultipleTemplate: Story<ListItemProps> = () => {
  const className = "listItem";
  const ref = useRoverIndex(`.${className}`);

  return (
    <div className={css.Story} ref={ref}>
      <ListItem className={className}>
        <Text>Item 1</Text>
      </ListItem>
      <ListItem className={className}>
        <Text>Item 2</Text>
      </ListItem>
      <ListItem className={className}>
        <Text>Item 3</Text>
      </ListItem>
      <ListItem className={className}>
        <Text>Item 4</Text>
      </ListItem>
      <ListItem className={className}>
        <Text>Item 5</Text>
      </ListItem>
      <ListItem className={className}>
        <Text>Item 6</Text>
      </ListItem>
    </div>
  );
};

const Default = Template.bind({});
const Multiple = MultipleTemplate.bind({});

Default.args = {};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default, Multiple };
