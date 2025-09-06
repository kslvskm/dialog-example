// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { DialogContent } from "..";

const meta: Meta<typeof DialogContent> = {
  title: "Dialog/DialogContent",
  component: DialogContent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DialogContent>;

export const Base: Story = {
  args: {
    children: "Long text",
  },
};
