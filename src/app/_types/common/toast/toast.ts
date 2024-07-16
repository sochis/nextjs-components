import { CSSProperties } from "react";
import { ToastPosition } from "react-hot-toast";

export interface HotToastParams {
  className?: string | undefined;
  position?: ToastPosition | undefined;
  reverseOrder?: boolean | undefined;
  gutter?: number | undefined;
  containerStyle?: CSSProperties | undefined;
  duration?: number | undefined;
  toastClassName?: string | undefined;
}
