import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import Home5Days from './pages/Home-5-days'
import useThemeStore from './store/ThemeStore'

function App() {
  const theme = useThemeStore((state) => state.theme)

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/5days" element={<Home5Days />} />
          </Route>
        </Routes>
        <GlobalStyle $selectedTheme={theme} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  )
}

export default App
