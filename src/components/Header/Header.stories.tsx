import type { Meta, StoryObj } from '@storybook/react'

import { Header } from "./index";

const meta: Meta<typeof Header> = {
  title: "components/shared/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

const template: Story = {
  render: () => <Header />,
};

export const Default: Story = {
  ...template,
};
