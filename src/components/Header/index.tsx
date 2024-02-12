import { HeaderOptions, HeaderTime, HeaderWrapper } from './styles'
import themeSwitch from '../../assets/theme-switch.svg'
import useModalStore from '../../store/ModalStore'
export function Header() {
  const { toggleModal } = useModalStore()

  const time = new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <HeaderWrapper>
      <HeaderTime>{time}</HeaderTime>
      <HeaderOptions>
        <button>Search</button>
        <button onClick={toggleModal}>Settings</button>
        <img
          src={themeSwitch}
          alt="theme-switch"
          style={{ height: 20, width: 20 }}
        />
      </HeaderOptions>
    </HeaderWrapper>
  )
}
