import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Menu, Wrapper, MenuTextArea } from './styles'

export const MenuText = () => {
  return (
    <MenuTextArea>
      <Typography>Menu</Typography>
      <i className="fa fa-chevron-down menu__icon" />
    </MenuTextArea>
  )
}

export default function({ children, elevation }) {
  return (
    <Menu className="menu">
      <Wrapper elevation={elevation} className="menu__wrapper">
        <Container maxWidth="lg" className="menu__container">
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <Typography>
                <strong>EDUCAÇÃO BÁSICA</strong>
              </Typography>
              <MenuText />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Link className="menu__link" href="/ensino-infantil">
                <Typography component="span" variant="body1">
                  Ensino Infantil
                </Typography>
              </Link>
              <Link className="menu__link" href="/ensino-fundamental-1">
                <Typography component="span" variant="body1">
                  Ensino Fundamental 1
                </Typography>
              </Link>
              <Link className="menu__link" href="/ensino-fundamental-2">
                <Typography component="span" variant="body1">
                  Ensino Fundamental 2
                </Typography>
              </Link>
              <Link className="menu__link" href="/ensino-medio">
                <Typography component="span" variant="body1">
                  Ensino Médio
                </Typography>
              </Link>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Container>
      </Wrapper>
      {children}
    </Menu>
  )
}
