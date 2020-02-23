import Head from 'next/head'
import React from 'react'
import Home from '~/pages/home'

export default function() {
  return (
    <div>
      <Head>
        <title>Quero</title>
      </Head>
      <Home />
    </div>
  )
}
