import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from ".";

const meta: Meta<typeof Icon> = {
  title: "components/Button/Icon",
  
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

const template: Story = {
  render: (args) => <Icon {...args} />,
};

export const Default: Story = {
  ...template,
};

export const Large: Story = {
  args: {
    size: 'large'
  },
};

export const Medium: Story = {
  ...template,
  args: {
    size: 'medium'
  },
};


