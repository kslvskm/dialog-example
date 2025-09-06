import styled from "@emotion/styled";
import { Modal as BaseModal } from "@mui/base/Modal";
import dialogCustomClasses from "./config/dialog-custom-classes";

export const StyledModal = styled(BaseModal)({
  position: "fixed",
  inset: 0,
});

export const DialogContainer = styled("div")({
  height: "100%",
  outline: 0,
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",

  [`&.${dialogCustomClasses.scrollBody}`]: {
    "&:after": {
      content: "''",
      backgroundColor: "red",
      display: "inline-block",
      verticalAlign: "middle",
      height: "100%",
    },
  },

  [`&.${dialogCustomClasses.scrollPaper}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const DialogContentWrapper = styled("div")({
  position: "relative",
  zIndex: 2,
  margin: "50px 20px",
  overflowY: "auto",
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left",

  maxWidth: "600px",
  width: "100%",

  background: "white",
  borderRadius: "6px",
  padding: "24px 48px",

  [`&.${dialogCustomClasses.scrollPaper}`]: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(100% - 100px)",
  },

  [`&.${dialogCustomClasses.scrollBody}`]: {
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "left",
  },
});

export const PositionedCloseIcon = styled("div")({
  position: "absolute",
  top: "24px",
  right: "32px",
});

export const CloseIcon = styled("div")({
  cursor: "pointer",
});
