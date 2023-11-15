import type { Meta, StoryObj } from '@storybook/react'

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "components/Buttons/Button",
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const template: Story = {
  render: (args) => <Button {...args}/>,
};

export const Default: Story = {
  ...template,
};

export const Primary: Story = {
  ...template,
  args: {
    color: "primary"
  }
};

export const Secondary: Story = {
  ...template,
  args: {
    color: "secondary"
  }
};

export const DownloadIcon: Story = {
  ...template,
  args: {
    icon: "download"
  }
};