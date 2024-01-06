"use client";
import { create } from "zustand";

type OpenSearchList = {
  open: boolean;
  setOpen: (value: boolean | ((prevOpen: boolean) => boolean)) => void;
};

export const useOpenSearchList = create<OpenSearchList>((set) => ({
  open: false,
  setOpen: (value) =>
    set((state) => ({
      open: typeof value === "function" ? value(state.open) : value,
    })),
}));
