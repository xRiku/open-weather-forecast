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
export const CityCard = styled.li<{ $selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 5rem;
  width: calc(100% / 6 - 0.833rem);
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s;
  ${({ $selected, theme }) =>
    $selected
      ? `background-color: ${theme.colors.blue}; color: ${theme.colors.white}; transition: 0s`
      : ''}
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.blue};
  }

  font-size: 2rem;
  span {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
`
