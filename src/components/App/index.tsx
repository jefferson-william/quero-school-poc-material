import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import Routers from '~/routers'
import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'
import '~/styles/global.scss'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </>
  )
}

export default hot(App)
