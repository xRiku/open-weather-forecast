import styled from 'styled-components'

export const CitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 100%;
`

export const CityForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 16rem);
`

export const CitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const CityCard = styled.li`
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
