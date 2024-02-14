import { useLocation, useNavigate } from 'react-router-dom'
import { SelectPeriodContainer, SelectPeriodButton } from './styles'
import useThemeStore from '../../store/ThemeStore'

export default function SelectPeriod() {
  const [theme] = useThemeStore((state) => [state.theme])

  const navigate = useNavigate()
  const path = useLocation().pathname

  const handleSelectPeriodClick = (pathname: string) => {
    navigate(pathname)
  }

  return (
    <SelectPeriodContainer>
      <span>Forecast</span>
      <div>
        <SelectPeriodButton
          $selectedTheme={theme}
          $isSelected={path === '/'}
          onClick={() => handleSelectPeriodClick('/')}
        >
          Now
        </SelectPeriodButton>
        <SelectPeriodButton
          $selectedTheme={theme}
          $isSelected={path === '/5days'}
          onClick={() => handleSelectPeriodClick('/5days')}
        >
          5 Days
        </SelectPeriodButton>
      </div>
    </SelectPeriodContainer>
  )
}
