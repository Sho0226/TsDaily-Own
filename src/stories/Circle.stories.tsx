import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["orange", "blue", "yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};
export const BlueCircle: Story = {
  args: {
    variant: "blue",
  },
};
export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: Story = {
  render: () => (
    <div style={{ padding: "10px 0" }}>
      <Circle variant="orange" />
      <Circle variant="blue" />
      <Circle variant="yellow" />
    </div>
  ),
};
