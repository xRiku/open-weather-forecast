import TemperatureUnit from '../enums/temperature-unit'

export default function addUnitToTemperatureByType(
  temp: number,
  type: TemperatureUnit,
) {
  if (type === 'metric') {
    return `${temp}°C`
  }
  if (type === 'imperial') {
    return `${temp}°F`
  }
  return `${temp}K`
}
