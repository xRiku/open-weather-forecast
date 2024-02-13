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
import useModalStore from '../../store/ModalStore'
import TimeFormat from '../../enums/time-format'
import addUnitToTemperatureByType from '../../utils/add-unit-to-temperature-by-type'
import useSearchStore from '../../store/SearchStore'
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
  const [selectedCity, setSelectedCity] = useSearchStore((state) => [
    state.selectedCity,
    state.setSelectedCity,
  ])

  const isOpen = useModalStore((state) => state.isOpen)

  const [temperatureUnit, timeFormat] = useSettingsStore((state) => [
    state.temperatureUnit,
    state.timeFormat,
  ])

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=${temperatureUnit}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    )
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData
  }

  const { status, data } = useQuery({
    queryKey: ['weather', selectedCity, temperatureUnit],
    queryFn: fetchData,
    enabled: !!selectedCity,
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
                <span>
                  Temp:{' '}
                  {addUnitToTemperatureByType(data.main.temp, temperatureUnit)}
                </span>
                <span>
                  Feels like:{' '}
                  {addUnitToTemperatureByType(
                    data.main.feels_like,
                    temperatureUnit,
                  )}
                </span>
                <span>Humidity: {data.main.humidity}%</span>
                <span>
                  Sunrise:{' '}
                  {new Date(data.sys.sunrise * 1000).toLocaleString(
                    navigator.language,
                    {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: timeFormat === TimeFormat['AM/PM'],
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
                      hour12: timeFormat === TimeFormat['AM/PM'],
                    },
                  )}
                </span>
              </div>
              <h1>{data.weather[0].main}</h1>
              <div></div>
            </div>
          ) : null}
        </CityForecast>
        <CitiesWrapper>
          {cities.map((city) => (
            <CityCard
              $selected={selectedCity === city}
              onClick={() => handleCitiesCardClick(city)}
              key={city}
            >
              {city}
            </CityCard>
          ))}
        </CitiesWrapper>
      </CitiesContainer>
      {isOpen && <SettingsModal />}
    </div>
  )
}
