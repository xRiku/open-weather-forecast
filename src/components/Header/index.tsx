import { HeaderOptions, HeaderTime, HeaderWrapper } from './styles'
import themeSwitch from '../../assets/theme-switch.svg'
import useModalStore from '../../store/ModalStore'
import TimeFormat from '../../enums/time-format'
import useSettingsStore from '../../store/SettingsStore'
import { useState } from 'react'
import Icon from '../Icon'
import useSearchStore from '../../store/SearchStore'
export function Header() {
  const toggleModal = useModalStore((state) => state.toggleModal)
  const [setSelectedCity] = useSearchStore((state) => [state.setSelectedCity])

  const [isSearchOpen, toggleSearch] = useState(false)

  const [timeFormat] = useSettingsStore((state) => [state.timeFormat])

  const time = new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: timeFormat === TimeFormat['AM/PM'],
  })

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSelectedCity((e.target as HTMLInputElement).value)
    }
  }

  return (
    <HeaderWrapper>
      <HeaderTime>{time}</HeaderTime>
      <HeaderOptions>
        {!isSearchOpen ? (
          <button onClick={() => toggleSearch(true)}>Search</button>
        ) : (
          <div>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Search" />
            <span onClick={() => toggleSearch(false)}>
              <Icon name="close" weatherCondition={false} />
            </span>
          </div>
        )}
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
