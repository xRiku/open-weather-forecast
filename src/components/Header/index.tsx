import { HeaderOptions, HeaderTime, HeaderWrapper } from './styles'
import themeSwitch from '../../assets/theme-switch.svg'
export function Header() {
  const time = new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <HeaderWrapper>
      <HeaderTime>{time}</HeaderTime>
      <HeaderOptions>
        <button>Search</button>
        <button>Settings</button>
        <img
          src={themeSwitch}
          alt="theme-switch"
          style={{ height: 20, width: 20 }}
        />
      </HeaderOptions>
    </HeaderWrapper>
  )
}
