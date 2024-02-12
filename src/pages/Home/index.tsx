import { useState } from 'react'
import { Header } from '../../components/Header'
import {
  CitiesContainer,
  CityCard,
  CitiesWrapper,
  CityForecast,
} from './styles'
import Icon from '../../components/Icon'
import { useQuery } from '@tanstack/react-query'
import useSettingsStore from '../../store/SettingsStore'
import SettingsModal from '../../components/SettingsModal'
const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'Fort Worth',
  'Columbus',
  'Charlotte',
  'San Francisco',
  'Indianapolis',
  'Seattle',
]

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('')

  const temperatureUnit = useSettingsStore((state) => state.temperatureUnit)

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=${temperatureUnit}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    )
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData
  }
  fetchData()
  const { status, data } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchData,
  })

  const handleCitiesCardClick = (city: string) => {
    setSelectedCity(city)
  }

  return (
    <div>
      <Header />
      <CitiesContainer>
        <CityForecast>
          {selectedCity === '' ? (
            <h1>Pick a city to see the full forecast</h1>
          ) : status === 'pending' ? (
            <h1>Loading...</h1>
          ) : status === 'error' ? (
            <h1>Error</h1>
          ) : status === 'success' && data !== undefined ? (
            <div id="info-grid">
              <h1>{data.name}</h1>
              <div></div>
              <Icon name={data.weather[0].icon} size={'8rem'} />
              <div>
                <span>Temp: {data.main.temp}</span>
                <span>Feels like: {data.main.feels_like}</span>
                <span>Humidity: {data.main.humidity}%</span>
                <span>
                  Sunrise:{' '}
                  {new Date(data.sys.sunrise * 1000).toLocaleString(
                    navigator.language,
                    {
                      hour: '2-digit',
                      minute: '2-digit',
                    },
                  )}
                </span>
                <span>
                  Sunset:{' '}
                  {new Date(data.sys.sunset * 1000).toLocaleString(
                    navigator.language,
                    {
                      hour: '2-digit',
                      minute: '2-digit',
                    },
                  )}
                </span>
              </div>
              <h1>Clouds</h1>
              <div></div>
            </div>
          ) : null}
        </CityForecast>
        <CitiesWrapper>
          {cities.map((city) => (
            <CityCard onClick={() => handleCitiesCardClick(city)} key={city}>
              {city}
            </CityCard>
          ))}
        </CitiesWrapper>
      </CitiesContainer>
      <SettingsModal />
    </div>
  )
}
