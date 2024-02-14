import styled from 'styled-components'

export const IconWrapper = styled.span<{
  $primary?: boolean
  $neon?: boolean
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    align-self: center;
  }
  path {
    ${({ $neon, theme, $primary }) =>
      $neon
        ? `filter: drop-shadow(0px 0px 0.75px ${$primary ? theme.colors.yellow : theme.colors.blue});`
        : ''}
    fill: ${(props) =>
      props.$primary ? props.theme.colors.yellow : props.theme.colors.blue};
  }
`
