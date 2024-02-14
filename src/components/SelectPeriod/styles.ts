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

export const SelectPeriodButton = styled.button<{ $isSelected: boolean }>`
  padding: 0.25rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 0.5rem;
  font-size: 1.25rem;

  ${({ $isSelected, theme }) =>
    $isSelected
      ? `background-color: ${theme.colors.blue}; color: ${theme.colors.white}; transition: 0.0s;`
      : ''}
  &:hover {
    transform: ${({ $isSelected }) =>
      $isSelected ? 'scale(1.0)' : 'scale(1.1)'};
    transition: 0.2s;
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.white : theme.colors.blue};
  }
`
