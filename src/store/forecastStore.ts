import { create } from 'zustand'

type ForecastStore = {
  forecasting: boolean
  setForecasting: (forecast: boolean) => void
}

const useForecastStore = create<ForecastStore>((set) => ({
  forecasting: false,
  setForecasting: (forecasting) => set({ forecasting }),
}))

export default useForecastStore
