import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import CityGrid from '../components/CityGrid'
import SettingsModal from '../components/SettingsModal'
import useModalStore from '../store/ModalStore'
import { LayoutWrapper } from './styles'
import SelectPeriod from '../components/SelectPeriod'
import useForecastStore from '../store/forecastStore'

export default function DefaultLayout() {
  const [isOpen] = useModalStore((state) => [state.isOpen])

  const [forecasting] = useForecastStore((state) => [state.forecasting])

  return (
    <LayoutWrapper>
      <Header />
      <div>
        <Outlet />
        {forecasting && <SelectPeriod />}
      </div>
      <CityGrid />
      {isOpen && <SettingsModal />}
    </LayoutWrapper>
  )
}
