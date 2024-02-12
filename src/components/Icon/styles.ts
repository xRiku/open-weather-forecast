import styled from 'styled-components'

export const IconWrapper = styled.div<{ $primary?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    align-self: center;
  }
  path {
    filter: drop-shadow(
      0px 0px 0.75px
        ${(props) =>
          props.$primary ? props.theme.colors.yellow : props.theme.colors.blue}
    );
    fill: ${(props) =>
      props.$primary ? props.theme.colors.yellow : props.theme.colors.blue};
  }
`
