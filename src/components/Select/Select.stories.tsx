import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import Select from "./Select";
import { SelectProps } from "./Select.type";
import css from "./Story.module.scss";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<SelectProps<string>> = (args) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const getOptionLabel = (value?: string) => value ?? "";
  const getActiveOption = (value: string) => value === selectedOption;

  return (
    <div className={css.Story}>
      <Select
        {...args}
        options={states}
        getOptionLabel={getOptionLabel}
        getActiveOption={getActiveOption}
        onChange={setSelectedOption}
        value={selectedOption}
      />
    </div>
  );
};

const Default = Template.bind({});

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default };
