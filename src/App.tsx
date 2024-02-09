import { ThemeProvider } from 'styled-components'
import colors from './styles/colors'
import { GlobalStyle } from './styles/global'

const theme = {
  colors,
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <span style={{ fontSize: '80px' }}>Hello World</span>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
