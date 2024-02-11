import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import Home from './pages/Home'
import { defaultTheme } from './styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
