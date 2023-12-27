"use client";
import { create } from "zustand";

type OffsetStore = {
  offset: number;
  limit: number;
  setOffset: (offset: number) => void;
};

export const useOffsetStore = create<OffsetStore>((set) => ({
  offset: 0,
  limit: 20,
  setOffset: (offset: number) => set({ offset }),
}));
