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

export const HeaderOptions = styled.div<{ $selectedTheme: string }>`
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
  img {
    cursor: pointer;

    ${({ $selectedTheme }) =>
      $selectedTheme === 'light' ? `` : `-webkit-filter: invert(100%);`}
  }

  svg {
    ${({ $selectedTheme }) =>
      $selectedTheme === 'light' ? `` : `-webkit-filter: invert(100%);`}
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 3px solid ${({ theme }) => theme.colors.blue};
    border-radius: 0.35rem;

    input {
      padding: 0 0.5rem;
      border: none;
      font-size: 1.5rem;
      &:focus {
        outline: none;
      }
      ${({ $selectedTheme, theme }) =>
        $selectedTheme === 'light'
          ? `background-color: ${theme.colors.white}; `
          : `background-color: ${theme.colors.black}; `}

      &::placeholder {
        ${({ $selectedTheme, theme }) =>
          $selectedTheme === 'light'
            ? `color: ${theme.colors.black}`
            : `color: ${theme.colors.white}`}
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
