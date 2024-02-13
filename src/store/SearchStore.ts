import { create } from 'zustand'

type SearchStore = {
  selectedCity: string
  setSelectedCity: (search: string) => void
}

const useSearchStore = create<SearchStore>((set) => ({
  selectedCity: '',
  setSelectedCity: (selectedCity) => set({ selectedCity }),
}))

export default useSearchStore
