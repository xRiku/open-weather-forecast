import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import CityGrid from '../components/CityGrid'
import SettingsModal from '../components/SettingsModal'
import useModalStore from '../store/ModalStore'

export default function DefaultLayout() {
  const [isOpen] = useModalStore((state) => [state.isOpen])

  return (
    <>
      <Header />
      <Outlet />
      <CityGrid />
      {isOpen && <SettingsModal />}
    </>
  )
}
