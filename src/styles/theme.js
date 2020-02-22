import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#304ffe',
    },
    secondary: {
      main: '#143182',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fbfbfb',
    },
  },
})

export default theme
