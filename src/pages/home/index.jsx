import React from 'react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import HeaderContent from '~/components/HeaderContent'
import HomeSearch from '~/components/HomeSearch'
import Menu from '~/components/Menu'

export default function() {
  return (
    <>
      <Header elevation={0}>
        <Menu elevation={0} />
        <HeaderContent elevation={0}>
          <HomeSearch elevation={12} />
        </HeaderContent>
      </Header>
      <Footer />
    </>
  )
}
