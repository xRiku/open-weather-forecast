import { create } from 'zustand'
import TemperatureUnit from '../enums/temperature-unit'

type SettingsStore = {
  theme: 'light' | 'dark'
  temperatureUnit: TemperatureUnit
  time: '24h' | '12h'
  toggleTheme: () => void
  setTemperatureUnit: (unit: TemperatureUnit) => void
  toggleTime: () => void
}

const useSettingsStore = create<SettingsStore>((set) => ({
  theme: 'light',
  temperatureUnit: TemperatureUnit.standard,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setTemperatureUnit: (temperatureUnit) => set({ temperatureUnit }),
  time: '24h',
  toggleTime: () =>
    set((state) => ({ time: state.time === '24h' ? '12h' : '24h' })),
}))

export default useSettingsStore
