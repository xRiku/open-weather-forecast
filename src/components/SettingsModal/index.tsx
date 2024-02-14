import useModalStore from '../../store/ModalStore'
import useSettingsStore from '../../store/SettingsStore'
import TemperatureUnit from '../../enums/temperature-unit'
import { ModalOverlay, ModalContent, ButtonBox, SettingsButton } from './styles'
import TimeFormat from '../../enums/time-format'
import useThemeStore from '../../store/ThemeStore'

export default function SettingsModal() {
  const [isOpen, toggleModal] = useModalStore((state) => {
    return [state.isOpen, state.toggleModal]
  })

  const [theme] = useThemeStore((state) => [state.theme])

  const [
    setTemperatureUnit,
    setTimeFormat,
    setSettings,
    temperatureUnitTemp,
    timeFormatTemp,
    resetTempSettings,
    timeFormat,
  ] = useSettingsStore((state) => [
    state.setTemperatureUnit,
    state.setTimeFormat,
    state.setSettings,
    state.temperatureUnitTemp,
    state.timeFormatTemp,
    state.resetTempSettings,
    state.timeFormat,
  ])

  const time = new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: timeFormat === TimeFormat['AM/PM'],
  })

  return (
    <ModalOverlay $isOpen={isOpen}>
      <ModalContent $selectedTheme={theme}>
        <h1>Settings</h1>
        <ButtonBox>
          <h2>Units</h2>
          <div>
            <SettingsButton
              $selectedTheme={theme}
              $isSelected={temperatureUnitTemp === TemperatureUnit.imperial}
              onClick={() => {
                setTemperatureUnit(TemperatureUnit.imperial)
              }}
            >
              Imperial
            </SettingsButton>
            <SettingsButton
              $selectedTheme={theme}
              $isSelected={temperatureUnitTemp === TemperatureUnit.metric}
              onClick={() => {
                setTemperatureUnit(TemperatureUnit.metric)
              }}
            >
              Metric
            </SettingsButton>
            <SettingsButton
              $selectedTheme={theme}
              $isSelected={temperatureUnitTemp === TemperatureUnit.standard}
              onClick={() => setTemperatureUnit(TemperatureUnit.standard)}
            >
              Standard
            </SettingsButton>
          </div>
        </ButtonBox>
        <ButtonBox>
          <h2>Time</h2>
          <div>
            <SettingsButton
              $selectedTheme={theme}
              $isSelected={timeFormatTemp === TimeFormat['AM/PM']}
              onClick={() => setTimeFormat(TimeFormat['AM/PM'])}
            >
              AM/PM
            </SettingsButton>
            <SettingsButton
              $selectedTheme={theme}
              $isSelected={timeFormatTemp === TimeFormat['24h']}
              onClick={() => setTimeFormat(TimeFormat['24h'])}
            >
              24h
            </SettingsButton>
          </div>
        </ButtonBox>
        <ButtonBox>
          <div>
            <SettingsButton
              $selectedTheme={theme}
              onClick={() => {
                resetTempSettings()
                toggleModal()
              }}
            >
              Cancel
            </SettingsButton>
            <SettingsButton
              $selectedTheme={theme}
              onClick={() => {
                setSettings()
                toggleModal()
              }}
            >
              Save
            </SettingsButton>
          </div>
        </ButtonBox>
        <ButtonBox>
          <h2>{time}</h2>
        </ButtonBox>
      </ModalContent>
    </ModalOverlay>
  )
}
