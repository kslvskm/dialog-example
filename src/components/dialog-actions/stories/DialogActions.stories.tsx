// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { DialogActions } from "..";

const meta: Meta<typeof DialogActions> = {
  title: "Dialog/DialogActions",
  component: DialogActions,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DialogActions>;

export const Base: Story = {
  args: {
    children: (
      <>
        <button>Cancel</button>
        <button>Save</button>
      </>
    ),
  },
};
