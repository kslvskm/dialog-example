import { FC } from "react";
import DialogContentTextProps from "./DialogContentText.model";
import clsx from "clsx";
import { Root } from "./DialogContentText.styled";

const DialogContentText: FC<DialogContentTextProps> = ({ className, ...props }) => {
  return <Root {...props} className={clsx("DialogContentText", className)} />;
};

export default DialogContentText;
