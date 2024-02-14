import {
  CityForecast,
  SelectPeriodButton,
  SelectPeriodContainer,
} from './styles'
import Icon from '../../components/Icon'
import { useQuery } from '@tanstack/react-query'
import useSettingsStore from '../../store/SettingsStore'
import TimeFormat from '../../enums/time-format'
import addUnitToTemperatureByType from '../../utils/add-unit-to-temperature-by-type'
import useSearchStore from '../../store/SearchStore'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [selectedCity] = useSearchStore((state) => [state.selectedCity])

  const path = useLocation().pathname

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
    <CityForecast>
      {selectedCity === '' ? (
        <h1>Pick a city to see the full forecast</h1>
      ) : status === 'pending' ? (
        <h1>Loading...</h1>
      ) : status === 'error' ? (
        <h1>Error</h1>
      ) : status === 'success' && data.cod === 200 ? (
        <div>
          <h1>{data.name}</h1>
          <div>
            <Icon name={data.weather[0].icon} size={'8rem'} />
          </div>
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
          <SelectPeriodContainer>
            <span>Forecast</span>
            <div>
              <SelectPeriodButton $isSelected={path === '/'}>
                Now
              </SelectPeriodButton>
              <SelectPeriodButton $isSelected={path === '/5days'}>
                5 Days
              </SelectPeriodButton>
            </div>
          </SelectPeriodContainer>
        </div>
      ) : status === 'success' && data.cod === '404' ? (
        <h1>City {selectedCity} not Found.</h1>
      ) : null}
    </CityForecast>
  )
}
