import { FC } from "react";
import DialogActionsProps from "./DialogActions.model";
import { Root } from "./DialogActions.styled";
import clsx from "clsx";

const DialogActions: FC<DialogActionsProps> = ({ className, ...props }) => {
  return <Root {...props} className={clsx("DialogActions", className)} />;
};

export default DialogActions;
