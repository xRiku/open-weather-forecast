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
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > span {
        align-self: center;
        margin-left: auto;
      }

      > div {
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: fixed;
        left: calc(50% + 8rem);
      }
    }
  }
`
