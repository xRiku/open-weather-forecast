import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTime = styled.span`
  font-size: 20px;
`

export const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  // underline text
  button {
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
    border-radius: 0.25rem;

    input {
      padding: 0 0.5rem;
      border: none;
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
