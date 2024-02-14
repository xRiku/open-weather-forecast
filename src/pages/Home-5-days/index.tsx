import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import Icon from '../../components/Icon'
import useSearchStore from '../../store/SearchStore'
import useSettingsStore from '../../store/SettingsStore'
import addUnitToTemperatureByType from '../../utils/add-unit-to-temperature-by-type'
import {
  CityForecast,
  SelectPeriodButton,
  SelectPeriodContainer,
} from '../Home/styles'

type FetchDataResponse = {
  list: {
    dt_txt: string
    dt: number
    main: {
      temp: number
    }
    weather: {
      main: string
      icon: string
    }[]
  }[]
  name: string
  cod: string
}

type DaysObject = {
  [key: string]: {
    highest: number
    lowest: number
    weather: string
    icon: string
    weekDay: string
    dt_txt: string
  }
}

export default function Home5Days() {
  const [selectedCity] = useSearchStore((state) => [state.selectedCity])

  const path = useLocation().pathname

  const [temperatureUnit, timeFormat] = useSettingsStore((state) => [
    state.temperatureUnit,
    state.timeFormat,
  ])

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=${temperatureUnit}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    )
    const jsonData = (await response.json()) as FetchDataResponse
    console.log(jsonData)
    return jsonData
  }

  const formattedDataFor5Days = (data: FetchDataResponse) => {
    const days = {} as DaysObject
    data.list.forEach((item) => {
      const date = item.dt_txt.split(' ')[0]
      if (!days[date]) {
        days[date] = {
          highest: item.main.temp,
          lowest: item.main.temp,
          weather: item.weather[0].main,
          icon: item.weather[0].icon,
          weekDay: new Date(item.dt * 1000).toDateString().split(' ')[0],
          dt_txt: item.dt_txt,
        }
      } else {
        if (item.main.temp > days[date].highest) {
          days[date].highest = item.main.temp
        }
        if (item.main.temp < days[date].lowest) {
          days[date].lowest = item.main.temp
        }
      }
    })
    const list =
      Object.values(days).length > 5
        ? Object.values(days).slice(0, 5)
        : Object.values(days)
    return { cod: data.cod, name: data.name, list }
  }

  const { status, data } = useQuery({
    queryKey: ['weather', selectedCity, temperatureUnit, path],
    queryFn: async () => {
      const data = await fetchData()

      return formattedDataFor5Days(data)
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
      ) : status === 'success' && data.cod === '200' ? (
        <div>
          <h1>{data.name}</h1>
          {data.list.map((day) => (
            <div key={day.dt_txt}>
              <h2>{day.weekDay}</h2>
              <div>
                <Icon name={day.icon} size={'8rem'} />
              </div>
              <div>
                <span>{day.dt_txt}</span>
                <span>
                  Highest:{' '}
                  {addUnitToTemperatureByType(
                    Math.round(day.highest),
                    temperatureUnit,
                  )}
                </span>
                <span>
                  Lowest:{' '}
                  {addUnitToTemperatureByType(
                    Math.round(day.lowest),
                    temperatureUnit,
                  )}
                </span>
              </div>
            </div>
          ))}
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
