import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",

  setTheme: (theme) => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("chat-theme", theme); 
    set({ theme });
  },
}));
