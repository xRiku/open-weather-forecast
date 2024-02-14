import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTime = styled.span`
  font-size: 1.5rem;
`

export const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  button {
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 0.15rem;

    input {
      padding: 0 0.5rem;
      border: none;
      font-size: 1.5rem;
      &:focus {
        outline: none;
      }
    }

    span {
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`
