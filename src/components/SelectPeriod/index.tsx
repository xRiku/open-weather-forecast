import { useLocation, useNavigate } from 'react-router-dom'
import { SelectPeriodContainer, SelectPeriodButton } from './styles'

export default function SelectPeriod() {
  const path = useLocation().pathname

  const navigate = useNavigate()

  const handleSelectPeriodClick = (pathname: string) => {
    navigate(pathname)
  }

  return (
    <SelectPeriodContainer>
      <span>Forecast</span>
      <div>
        <SelectPeriodButton
          $isSelected={path === '/'}
          onClick={() => handleSelectPeriodClick('/')}
        >
          Now
        </SelectPeriodButton>
        <SelectPeriodButton
          $isSelected={path === '/5days'}
          onClick={() => handleSelectPeriodClick('/5days')}
        >
          5 Days
        </SelectPeriodButton>
      </div>
    </SelectPeriodContainer>
  )
}
