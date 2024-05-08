import { create } from "zustand";

type dndStore = {
  isDropped: boolean;
  setIsDropped: (isDropped: boolean) => void;
};

export const useDndStore = create<dndStore>((set) => ({
  isDropped: false,
  setIsDropped: (isDropped: boolean) =>
    set((_) => ({
      isDropped: isDropped,
    })),
}));
