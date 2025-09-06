import { FC } from "react";
import {
  CloseIcon,
  DialogContainer,
  DialogContentWrapper,
  PositionedCloseIcon,
  StyledModal,
} from "./Dialog.styled";
import DialogProps from "./Dialog.model";
import Backdrop from "./components/backdrop/Backdrop";
import clsx from "clsx";
import dialogCustomClasses from "./config/dialog-custom-classes";
import { ModalOwnProps } from "@mui/base";

const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  children,
  className,
  style,
  scroll = "body",
}) => {
  const slots: ModalOwnProps["slots"] = { backdrop: Backdrop };

  const slotProps: ModalOwnProps["slotProps"] = {
    root: {
      className,
      style,
    },
  };

  const scrollClassName = clsx({
    [dialogCustomClasses.scrollBody]: scroll === "body",
    [dialogCustomClasses.scrollPaper]: scroll === "paper",
  });

  const dialogContainerClassName = clsx("DialogContainer", scrollClassName);

  const dialogContentClassName = clsx("DialogContentWrapper", scrollClassName);

  return (
    <StyledModal
      open={open}
      slots={slots}
      slotProps={slotProps}
      onClose={onClose}
      closeAfterTransition
    >
      <DialogContainer className={dialogContainerClassName}>
        <DialogContentWrapper className={dialogContentClassName}>
          <PositionedCloseIcon>
            <CloseIcon onClick={onClose}>Close</CloseIcon>
          </PositionedCloseIcon>
          {children}
        </DialogContentWrapper>
      </DialogContainer>
    </StyledModal>
  );
};

export default Dialog;
