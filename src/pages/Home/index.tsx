import { Header } from '../../components/Header'
import {
  CitiesContainer,
  CityCard,
  CitiesWrapper,
  CityForecast,
} from './styles'

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
  return (
    <div>
      <Header />
      <CitiesContainer>
        <CityForecast>
          <h1>Pick a city to see the full forecast</h1>
        </CityForecast>
        <CitiesWrapper>
          {cities.map((city) => (
            <CityCard key={city}>{city}</CityCard>
          ))}
        </CitiesWrapper>
      </CitiesContainer>
    </div>
  )
}
