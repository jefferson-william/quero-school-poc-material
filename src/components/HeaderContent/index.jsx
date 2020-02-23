import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { HeaderContent, Wrapper } from './styles'

export default function({ children, elevation }) {
  return (
    <HeaderContent className="header-content">
      <Wrapper elevation={elevation} className="header-content__wrapper">
        <Container maxWidth="lg" className="header-content__container">
          <Typography className="header-content__title" variant="h6" component="h1">
            Encontre bolsas de estudo nas melhores escolas do Brasil.
          </Typography>
        </Container>
      </Wrapper>
      {children && (
        <div className="header-content__wrap">
          <Wrapper elevation={4} className="header-content__wrap-background" />
          {children}
        </div>
      )}
    </HeaderContent>
  )
}
