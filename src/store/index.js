import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  isDark: true,
  toggleTheme: () => set((state) => {
    const next = !state.isDark;
    document.body.classList.toggle('light', next === false);
    return { isDark: next };
  }),
}));

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
