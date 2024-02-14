import App from './App'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { beforeAll, describe, expect, it } from 'vitest'
import nock from 'nock'
import useSearchStore from './store/SearchStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AllTheProviders = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  })
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  )
}

describe('App', () => {
  beforeAll(() => {
    nock(`https://api.openweathermap.org`)
      .get(
        `/data/2.5/weather?q=New%20York&units=standard&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      )
      .reply(200, {
        weather: [
          {
            main: 'Clouds',
            icon: '01d',
          },
        ],
        main: {
          temp: 272.44,
          feels_like: 265.44,
          temp_min: 271.12,
          temp_max: 273.99,
          humidity: 49,
        },
        dt: 1707924700,
        sys: {
          country: 'US',
          sunrise: 1707911526,
          sunset: 1707949714,
        },
        name: 'New York',
        cod: 200,
      })

    nock(`https://api.openweathermap.org`)
      .get(
        `/data/2.5/weather?q=vitoria&units=standard&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      )
      .reply(200, {
        weather: [
          {
            main: 'Clear',
            icon: '01d',
          },
        ],
        main: {
          temp: 272.44,
          feels_like: 265.44,
          temp_min: 271.12,
          temp_max: 273.99,
          humidity: 49,
        },
        dt: 1707924700,
        sys: {
          country: 'BR',
          sunrise: 1707911526,
          sunset: 1707949714,
        },
        name: 'Vitória',
        cod: 200,
      })

    nock(`https://api.openweathermap.org`)
      .get(
        `/data/2.5/weather?q=invalid%20city&units=standard&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      )
      .reply(404, {
        cod: '404',
      })
  })

  describe('Home', () => {
    it('should render the text for city not selected', () => {
      const { getByText } = render(<App />, { wrapper: AllTheProviders })
      expect(
        getByText('Pick a city to see the full forecast'),
      ).toBeInTheDocument()
    })

    it('should properly display the weather information when a valid city is selected', async () => {
      const { getByText, queryByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const cityButton = getByText('New York')
      fireEvent.click(cityButton)
      await waitFor(() => {
        expect(queryByText('Clouds')).toBeInTheDocument()
        expect(queryByText('Temp: 272K')).toBeInTheDocument()
        expect(queryByText('Feels like: 265K')).toBeInTheDocument()
        expect(queryByText('Humidity: 49%')).toBeInTheDocument()
        expect(queryByText('Sunrise: 08:52')).toBeInTheDocument()
        expect(queryByText('Sunset: 19:28')).toBeInTheDocument()
      })
    })
  })

  describe('SelectPeriod', () => {
    const originalState = useSearchStore.getState()
    beforeAll(() => {
      useSearchStore.setState(originalState, true)
      const setSelectedCity = useSearchStore.getState().setSelectedCity
      setSelectedCity('')
    })

    // it('should not render buttons and Forecast if city is not selected', () => {
    //   const { queryByText } = render(<App />, {
    //     wrapper: AllTheProviders,
    //   })
    //   expect(queryByText('Forecast')).not.toBeInTheDocument()
    //   expect(queryByText('Now')).not.toBeInTheDocument()
    //   expect(queryByText('5 Days')).not.toBeInTheDocument()
    // })

    it('should render the Forecast text and Now and 5days button when city is selected', async () => {
      const { queryByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const cityButton = queryByText('New York')
      fireEvent.click(cityButton!)

      await waitFor(() => {
        expect(queryByText('Forecast')).toBeInTheDocument()
        expect(queryByText('Now')).toBeInTheDocument()
        expect(queryByText('5 Days')).toBeInTheDocument()
      })
    })

    it('should navigate to 5days page when 5days button is clicked', async () => {
      const { queryByText, getByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const cityButton = queryByText('New York')
      fireEvent.click(cityButton!)

      const fiveDaysButton = getByText('5 Days')
      fireEvent.click(fiveDaysButton)

      expect(window.location.pathname).toBe('/5days')
    })

    it('should navigate to current day page when Now button is clicked', async () => {
      const { queryByText, getByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const cityButton = queryByText('New York')
      fireEvent.click(cityButton!)

      const fiveDaysButton = getByText('Now')
      fireEvent.click(fiveDaysButton)

      expect(window.location.pathname).toBe('/')
    })
  })
  describe('Header', () => {
    it('Should display current time', () => {
      const { queryByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const time = new Date().toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      expect(queryByText(time)).toBeInTheDocument()
    })

    it('Should display an input when clicking in search', () => {
      const { queryByPlaceholderText, getByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const searchButton = getByText('Search')
      fireEvent.click(searchButton)
      expect(queryByPlaceholderText('Search')).toBeInTheDocument()
    })

    it('Should display weather information when a valid city is searched', async () => {
      const { queryByPlaceholderText, queryByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const searchButton = queryByText('Search')
      fireEvent.click(searchButton!)
      const searchInput = queryByPlaceholderText('Search')
      fireEvent.change(searchInput!, { target: { value: 'vitoria' } })
      fireEvent.keyDown(searchInput!, { key: 'Enter', code: 'Enter' })
      await waitFor(() => {
        expect(queryByText('Vitória')).toBeInTheDocument()
      })
    })

    it('Should display an error message when a invalid city is searched', async () => {
      const { queryByPlaceholderText, queryByText } = render(<App />, {
        wrapper: AllTheProviders,
      })
      const searchButton = queryByText('Search')
      fireEvent.click(searchButton!)
      const searchInput = queryByPlaceholderText('Search')
      const cityString = 'invalid city'
      fireEvent.change(searchInput!, { target: { value: cityString } })
      fireEvent.keyDown(searchInput!, { key: 'Enter', code: 'Enter' })
      await waitFor(() => {
        expect(queryByText(`City ${cityString} not found.`)).toBeInTheDocument()
      })
    })
  })
})
