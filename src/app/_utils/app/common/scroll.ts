import { RefObject } from "react";

/**
 * Scrolls smoothly to the specified target element.
 *
 * @param ref - The reference to the target element
 */
export const handleScroll = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
