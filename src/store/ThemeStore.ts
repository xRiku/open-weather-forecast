import { create } from 'zustand'
import Theme from '../enums/theme'

type ThemeStore = {
  theme: string
  toggleTheme: () => void
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'link',
  toggleTheme: () =>
    set((state) => {
      switch (state.theme) {
        case Theme.light:
          return { theme: Theme.dark }
        case Theme.dark:
          return { theme: Theme.light }
        default:
          return { theme: Theme.light }
      }
    }),
}))

export default useThemeStore
