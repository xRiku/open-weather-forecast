import { ThemeProvider } from 'styled-components'
import colors from './styles/colors'
import { GlobalStyle } from './styles/global'
import Home from './pages/Home'

const theme = {
  colors,
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
