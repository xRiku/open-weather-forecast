import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import CityGrid from '../components/CityGrid'
import SettingsModal from '../components/SettingsModal'
import useModalStore from '../store/ModalStore'
import { LayoutWrapper } from './styles'

export default function DefaultLayout() {
  const [isOpen] = useModalStore((state) => [state.isOpen])

  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <CityGrid />
      {isOpen && <SettingsModal />}
    </LayoutWrapper>
  )
}
