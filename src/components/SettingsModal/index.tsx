import useModalStore from '../../store/ModalStore'
import useSettingsStore from '../../store/SettingsStore'
import TemperatureUnit from '../../enums/temperature-unit'
import { ModalOverlay, ModalContent, ButtonBox, SettingsButton } from './styles'
import TimeFormat from '../../enums/time-format'

export default function SettingsModal() {
  const [isOpen, toggleModal] = useModalStore((state) => {
    return [state.isOpen, state.toggleModal]
  })
  const [temperatureUnit, setTemperatureUnit, timeFormat, setTime] =
    useSettingsStore((state) => [
      state.temperatureUnit,
      state.setTemperatureUnit,
      state.timeFormat,
      state.setTime,
    ])

  return (
    <ModalOverlay $isOpen={isOpen}>
      <ModalContent>
        <h1>Settings</h1>
        <ButtonBox>
          <h2>Units</h2>
          <div>
            <SettingsButton
              $isSelected={temperatureUnit === TemperatureUnit.imperial}
              onClick={() => {
                setTemperatureUnit(TemperatureUnit.imperial)
              }}
            >
              Imperial
            </SettingsButton>
            <SettingsButton
              $isSelected={temperatureUnit === TemperatureUnit.metric}
              onClick={() => {
                setTemperatureUnit(TemperatureUnit.metric)
              }}
            >
              Metric
            </SettingsButton>
            <SettingsButton
              $isSelected={temperatureUnit === TemperatureUnit.standard}
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
              $isSelected={timeFormat === TimeFormat['AM/PM']}
              onClick={() => setTime(TimeFormat['AM/PM'])}
            >
              AM/PM
            </SettingsButton>
            <SettingsButton
              $isSelected={timeFormat === TimeFormat['24h']}
              onClick={() => setTime(TimeFormat['24h'])}
            >
              24h
            </SettingsButton>
          </div>
        </ButtonBox>
        <ButtonBox>
          <div>
            <SettingsButton onClick={toggleModal}>Cancel</SettingsButton>
            <SettingsButton>Save</SettingsButton>
          </div>
        </ButtonBox>
      </ModalContent>
    </ModalOverlay>
  )
}
