import { create } from 'zustand'
import TemperatureUnit from '../enums/temperature-unit'
import TimeFormat from '../enums/time-format'

type SettingsStore = {
  theme: 'light' | 'dark'
  temperatureUnit: TemperatureUnit
  timeFormat: TimeFormat
  toggleTheme: () => void
  setTemperatureUnit: (unit: TemperatureUnit) => void
  setTime: (time: TimeFormat) => void
}

const useSettingsStore = create<SettingsStore>((set) => ({
  theme: 'light',
  temperatureUnit: TemperatureUnit.standard,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setTemperatureUnit: (temperatureUnit) => set({ temperatureUnit }),
  timeFormat: TimeFormat['24h'],
  setTime: (timeFormat) => set({ timeFormat }),
}))

export default useSettingsStore
