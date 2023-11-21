import { ChangeEvent, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";
import Combobox, { ComboboxProps } from "./Combobox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  decorators: [(Story) => <div style={{ height: "400px" }}>{Story()}</div>],
  args: {
    placeholder: "Saisissez 3 lettres pour démarrer la recherche",
    options: [
      {
        value: "First Item",
        label: "First Item",
      },
      {
        value: "Second Item",
        label: "Second Item",
      },
      {
        value: "Third Item",
        label: "Third Item",
      },
      {
        value: "Fourth Item",
        label: "Fourth Item",
      },
      {
        value: "Fifth Item",
        label: "Fifth Item",
      },
      {
        value: "Sixth Item",
        label: "Sixth Item",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Base: Story = {
  render: (args: ComboboxProps) => {
    const [value, setValue] = useState<string>("");
    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const handleSearchResultsChange = async (model: string | number) => {
      console.log(model);
    };
    return (
      <Combobox
        {...args}
        value={value}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchResultsChange={handleSearchResultsChange}
      />
    );
  },
};

export const ComboboxLoading: Story = {
  render: (args: ComboboxProps) => {
    const options = [];
    return <Combobox {...args} isLoading options={options} />;
  },
};

export const ComboboxNoResult: Story = {
  render: (args: ComboboxProps) => {
    const options = [];
    return <Combobox {...args} noResult options={options} />;
  },
};
