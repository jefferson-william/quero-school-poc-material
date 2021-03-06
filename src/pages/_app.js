import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'
import '~/styles/global.scss'

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps, router, err } = this.props

    return (
      <>
        <Head>
          <title>Quero</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Component {...pageProps} {...router} {...err} />
        </ThemeProvider>
      </>
    )
  }
}
