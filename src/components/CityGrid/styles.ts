import styled from 'styled-components'

export const CitiesWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  column-gap: 1rem;
  width: 100%;
  position: inherit;
  bottom: 0;
  height: 25%;
`
export const CityCard = styled.li<{
  $isSelected: boolean
  $selectedTheme: string
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 5rem;
  width: calc(100% / 6 - 0.833rem);
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 2rem;
  span {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
  border: ${({ $isSelected, theme }) =>
    $isSelected ? `none` : '3px solid ' + theme.colors.blue};
  background-color: ${({ theme, $isSelected, $selectedTheme }) =>
    $selectedTheme === 'light'
      ? $isSelected
        ? theme.colors.blue
        : theme.colors.white
      : $isSelected
        ? theme.colors.white
        : theme.colors.black};
  color: ${({ $selectedTheme, theme, $isSelected }) =>
    $selectedTheme === 'light'
      ? $isSelected
        ? theme.colors.white
        : theme.colors.blue
      : $isSelected
        ? theme.colors.blue
        : theme.colors.white};
`
