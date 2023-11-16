import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from ".";

const meta: Meta<typeof Icon> = {
  title: "components/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const template: Story = {
  render: () => <Icon />,
};

export const Default: Story = {
  ...template,
};
