import { create } from 'zustand'
import TemperatureUnit from '../enums/temperature-unit'
import TimeFormat from '../enums/time-format'

type SettingsStore = {
  temperatureUnit: TemperatureUnit
  timeFormat: TimeFormat
  temperatureUnitTemp: TemperatureUnit
  timeFormatTemp: TimeFormat
  setTemperatureUnit: (unit: TemperatureUnit) => void
  setTimeFormat: (time: TimeFormat) => void
  setSettings: () => void
  resetTempSettings: () => void
}

const useSettingsStore = create<SettingsStore>((set) => ({
  temperatureUnit: TemperatureUnit.standard,
  temperatureUnitTemp: TemperatureUnit.standard,
  timeFormatTemp: TimeFormat['24h'],
  timeFormat: TimeFormat['24h'],
  setTemperatureUnit: (temperatureUnit) =>
    set({ temperatureUnitTemp: temperatureUnit }),
  setTimeFormat: (timeFormat) => set({ timeFormatTemp: timeFormat }),
  setSettings: () =>
    set((state) => ({
      timeFormat: state.timeFormatTemp,
      temperatureUnit: state.temperatureUnitTemp,
    })),
  resetTempSettings: () =>
    set((state) => ({
      temperatureUnitTemp: state.temperatureUnit,
      timeFormatTemp: state.timeFormat,
    })),
}))

export default useSettingsStore
