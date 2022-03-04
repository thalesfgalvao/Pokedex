import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
