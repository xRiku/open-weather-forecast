import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import Home from './pages/Home'
import { defaultTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
