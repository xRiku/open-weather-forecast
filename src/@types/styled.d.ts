import 'styled-components'
import colors from '../styles/colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
  }
}
