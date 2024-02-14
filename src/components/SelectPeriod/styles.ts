import styled from 'styled-components'

export const SelectPeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  span {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const SelectPeriodButton = styled.button<{
  $isSelected: boolean
  $selectedTheme: string
}>`
  padding: 0.25rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 0.25rem;
  font-size: 1.25rem;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  border: ${({ $isSelected, theme }) =>
    $isSelected ? `none` : '1px solid ' + theme.colors.blue};
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
