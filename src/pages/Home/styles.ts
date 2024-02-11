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

  #info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.5fr 1fr 0.5fr;

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  div {
    align-items: center;
    justify-content: center;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      span {
        font-size: 1.5rem;
        line-height: 0.7rem;
        font-weight: 300;
      }
    }
  }
`
export const WeatherReport = styled.div`
  display: flex;
  flex-direction: column;
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
