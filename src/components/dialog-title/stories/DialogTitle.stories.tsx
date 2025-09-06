// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { DialogTitle } from "../../dialog-title";

const meta: Meta<typeof DialogTitle> = {
  title: "Dialog/DialogTitle",
  component: DialogTitle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DialogTitle>;

export const Base: Story = {
  args: {
    children: "Title",
  },
};
