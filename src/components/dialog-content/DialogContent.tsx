import { FC } from "react";
import { Root } from "./DialogContent.styled";
import DialogContentProps from "./DialogContent.model";
import clsx from "clsx";

const DialogContent: FC<DialogContentProps> = ({ className, ...props }) => {
  return <Root {...props} className={clsx("DialogContent", className)} />;
};

export default DialogContent;
