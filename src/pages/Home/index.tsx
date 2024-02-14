import { CityForecast } from './styles'
import Icon from '../../components/Icon'
import { useQuery } from '@tanstack/react-query'
import useSettingsStore from '../../store/SettingsStore'
import useSearchStore from '../../store/SearchStore'
import { useLocation } from 'react-router-dom'
import useForecastStore from '../../store/forecastStore'
import TimeFormat from '../../enums/time-format'
import addUnitToTemperatureByType from '../../utils/add-unit-to-temperature-by-type'

export default function Home() {
  const [selectedCity] = useSearchStore((state) => [state.selectedCity])

  const path = useLocation().pathname

  const [setForecasting] = useForecastStore((state) => [state.setForecasting])

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
    queryKey: ['weather', selectedCity, temperatureUnit, path],
    queryFn: async () => {
      const data = await fetchData()
      if (data.cod === 200 || data.cod === '200') {
        setForecasting(true)
      } else {
        setForecasting(false)
      }

      return data
    },
    enabled: !!selectedCity,
  })

  return (
    <CityForecast>
      {selectedCity === '' ? (
        <h1>Pick a city to see the full forecast</h1>
      ) : status === 'pending' ? (
        <h1>Loading...</h1>
      ) : status === 'error' ? (
        <h1>Error</h1>
      ) : (status === 'success' && data.cod === 200) || data.cod === '200' ? (
        <div>
          <h1>{data.name}</h1>
          <div>
            <Icon name={data.weather[0].icon} />
            <div>
              <span>
                Temp:{' '}
                {addUnitToTemperatureByType(
                  Math.round(data.main.temp),
                  temperatureUnit,
                )}
              </span>
              <span>
                Feels like:{' '}
                {addUnitToTemperatureByType(
                  Math.round(data.main.feels_like),
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
          </div>
          <h1>{data.weather[0].main}</h1>
        </div>
      ) : status === 'success' && data.cod === '404' ? (
        <h1>City {selectedCity} not found.</h1>
      ) : null}
    </CityForecast>
  )
}
