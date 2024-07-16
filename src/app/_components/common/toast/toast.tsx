"use client";

import { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import { HotToastParams } from "@/types/common/toast/toast";

export function HotToast({
  className,
  position,
  reverseOrder,
  gutter,
  containerStyle,
  duration,
  toastClassName,
}: HotToastParams): ReactElement {
  return (
    <Toaster
      containerClassName={className}
      position={position}
      reverseOrder={reverseOrder}
      gutter={gutter}
      containerStyle={containerStyle}
      toastOptions={{
        className: toastClassName,
        duration: duration,
      }}
    />
  );
}
