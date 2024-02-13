import { CitiesContainer, CityForecast } from './styles'
import Icon from '../../components/Icon'
import { useQuery } from '@tanstack/react-query'
import useSettingsStore from '../../store/SettingsStore'
import TimeFormat from '../../enums/time-format'
import addUnitToTemperatureByType from '../../utils/add-unit-to-temperature-by-type'
import useSearchStore from '../../store/SearchStore'

export default function Home() {
  const [selectedCity] = useSearchStore((state) => [state.selectedCity])

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

  return (
    <CitiesContainer>
      <CityForecast>
        {selectedCity === '' ? (
          <h1>Pick a city to see the full forecast</h1>
        ) : status === 'pending' ? (
          <h1>Loading...</h1>
        ) : status === 'error' ? (
          <h1>Error</h1>
        ) : status === 'success' && data.cod === 200 ? (
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
        ) : status === 'success' && data.cod === '404' ? (
          <h1>City {selectedCity} not Found.</h1>
        ) : null}
      </CityForecast>
    </CitiesContainer>
  )
}
