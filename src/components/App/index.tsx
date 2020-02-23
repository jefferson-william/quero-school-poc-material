import React from 'react'
import { hot } from 'react-hot-loader/root'
import Routers from '~/routers'
import GlobalStyle from '~/styles/global'
import '~/styles/global.scss'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  )
}

export default hot(App)
