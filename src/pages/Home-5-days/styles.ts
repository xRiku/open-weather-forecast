import styled from 'styled-components'

export const CityForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  padding: 1rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    height: 100%;
  }
`

export const WeatherReport5Days = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
    }

    div {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`
