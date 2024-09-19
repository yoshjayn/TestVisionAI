import { create } from "zustand";

const useToggleStore = create((set) => ({
    currentIndex: 1,
    toggleIndex: (index) => set(() => ({
        currentIndex: index,
    })),
}));

export default useToggleStore;

