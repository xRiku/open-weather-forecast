import styled from 'styled-components'

export const CitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const CityCard = styled.li<{ $selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  height: 3rem;
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
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
  span {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
`
