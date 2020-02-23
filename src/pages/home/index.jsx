import React from 'react'
import Header from '~/components/Header'
import HeaderContent from '~/components/HeaderContent'
import Menu from '~/components/Menu'

export default function() {
  return (
    <>
      <Header elevation={0}>
        <Menu elevation={0} />
        <HeaderContent elevation={4} />
      </Header>
    </>
  )
}
