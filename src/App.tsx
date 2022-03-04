import { ThemeProvider } from 'styled-components'
import Balls from './components/Balls'
import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Balls />
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
