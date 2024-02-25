import { create } from 'zustand'

type LoginStore = {
    loggedIn: boolean,
    toggleLogin: () => void,
}
export const useLoginStore = create<LoginStore>((set) => ({
    loggedIn: false,
    toggleLogin: () => set((state) => ({ loggedIn: !state.loggedIn })),
}));
