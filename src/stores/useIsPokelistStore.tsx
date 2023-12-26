"use client";
import { create } from "zustand";

type isPokelist = {
  isPokelist: boolean;
  setIsPokelist: (isPokelist: boolean) => void;
};

export const useIsPokelistStore = create<isPokelist>((set) => ({
  isPokelist: false,
  setIsPokelist: (isPokelist: boolean) => set({ isPokelist }),
}));
