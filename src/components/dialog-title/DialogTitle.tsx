import { FC } from "react";
import { DialogTitleProps } from ".";
import { Root } from "./DialogTitle.styled";
import clsx from "clsx";

const DialogTitle: FC<DialogTitleProps> = ({ className, ...props }) => {
  return <Root {...props} className={clsx("DialogTitle", className)} />;
};

export default DialogTitle;
