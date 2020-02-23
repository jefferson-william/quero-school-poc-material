import Container from '@material-ui/core/Container'
import React from 'react'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'
import { Header, Wrapper } from './styles'

export default function({ children, elevation }) {
  return (
    <Header className="header">
      <Wrapper elevation={elevation} className="header__wrapper">
        <Container maxWidth="lg" className="header__container">
          <div>
            <Logo className="header__logo" />
          </div>
          <div>
            <i className="fa fa-question-circle" />
          </div>
        </Container>
      </Wrapper>
      {children}
    </Header>
  )
}
