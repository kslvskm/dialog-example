import { forwardRef } from "react";
import { StyledBackground } from "./Backdrop.styled";

const Backdrop = forwardRef<
  HTMLDivElement,
  { open: boolean; className: string }
>((props) => {
  const { open, ...other } = props;
  return <StyledBackground {...other} />;
});

export default Backdrop;
