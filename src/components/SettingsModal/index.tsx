import useModalStore from '../../store/ModalStore'
import useSettingsStore from '../../store/SettingsStore'
import TemperatureUnit from '../../enums/temperature-unit'
import { ModalOverlay, ModalContent, ButtonBox, SettingsButton } from './styles'

export default function SettingsModal() {
  const { toggleModal } = useModalStore()
  const [temperatureUnit, setTemperatureUnit] = useSettingsStore((state) => [
    state.temperatureUnit,
    state.setTemperatureUnit,
  ])

  return (
    <ModalOverlay onClick={toggleModal}>
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
            <SettingsButton>AM/PM</SettingsButton>
            <SettingsButton>24h</SettingsButton>
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
