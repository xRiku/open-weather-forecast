import styled from 'styled-components'

export const IconWrapper = styled.div<{ $primary?: boolean }>`
  path {
    fill: ${(props) =>
      props.$primary ? props.theme.colors.yellow : props.theme.colors.blue};
  }
`
