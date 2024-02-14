import useSearchStore from '../../store/SearchStore'
import { CitiesWrapper, CityCard } from './styles'

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

export default function CityGrid() {
  const [selectedCity, setSelectedCity] = useSearchStore((state) => [
    state.selectedCity,
    state.setSelectedCity,
  ])

  return (
    <CitiesWrapper>
      {cities.map((city) => (
        <CityCard
          $selected={selectedCity === city}
          onClick={() => setSelectedCity(city)}
          key={city}
        >
          {city}
        </CityCard>
      ))}
    </CitiesWrapper>
  )
}
