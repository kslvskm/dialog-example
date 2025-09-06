import { CSSProperties, ReactNode } from "react";
import DialogScroll from "./entities/dialog-scroll.entity";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  scroll?: DialogScroll;
  className?: string;
  style?: CSSProperties;
}

export default DialogProps;
