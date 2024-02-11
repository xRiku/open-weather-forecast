import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import {
  CitiesContainer,
  CityCard,
  CitiesWrapper,
  CityForecast,
} from './styles'
import Icon from '../../components/Icon'

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
  const [selectedCity, setSelectedCity] = useState('Vancouver')

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    //   )
    //   const jsonData = await response.json()
    //   console.log(jsonData)
    // }
    // fetchData()
  }, [])

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
          ) : (
            <div id="info-grid">
              <h1>New york</h1>
              <div></div>
              <Icon name="01" size={'8rem'} />
              <div>
                <span>Temp: 24ºC</span>
                <span>Feels like: 24ºC</span>
                <span>Humidity: 24%</span>
                <span>Sunrise: 06:28</span>
                <span>Sunset: 18:58</span>
              </div>
              <h1>Clouds</h1>
              <div></div>
            </div>
          )}
        </CityForecast>
        <CitiesWrapper>
          {cities.map((city) => (
            <CityCard onClick={() => handleCitiesCardClick(city)} key={city}>
              {city}
            </CityCard>
          ))}
        </CitiesWrapper>
      </CitiesContainer>
    </div>
  )
}
