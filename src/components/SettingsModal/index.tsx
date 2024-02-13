import useModalStore from '../../store/ModalStore'
import useSettingsStore from '../../store/SettingsStore'
import TemperatureUnit from '../../enums/temperature-unit'
import { ModalOverlay, ModalContent, ButtonBox, SettingsButton } from './styles'
import TimeFormat from '../../enums/time-format'

export default function SettingsModal() {
  const [isOpen, toggleModal] = useModalStore((state) => {
    return [state.isOpen, state.toggleModal]
  })
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
      <ModalContent>
        <h1>Settings</h1>
        <ButtonBox>
          <h2>Units</h2>
          <div>
            <SettingsButton
              $isSelected={temperatureUnitTemp === TemperatureUnit.imperial}
              onClick={() => {
                setTemperatureUnit(TemperatureUnit.imperial)
              }}
            >
              Imperial
            </SettingsButton>
            <SettingsButton
              $isSelected={temperatureUnitTemp === TemperatureUnit.metric}
              onClick={() => {
                setTemperatureUnit(TemperatureUnit.metric)
              }}
            >
              Metric
            </SettingsButton>
            <SettingsButton
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
              $isSelected={timeFormatTemp === TimeFormat['AM/PM']}
              onClick={() => setTimeFormat(TimeFormat['AM/PM'])}
            >
              AM/PM
            </SettingsButton>
            <SettingsButton
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
              onClick={() => {
                resetTempSettings()
                toggleModal()
              }}
            >
              Cancel
            </SettingsButton>
            <SettingsButton
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
